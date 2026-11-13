import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Element, ElementContent, Text } from 'hast';
import type { Code } from 'mdast';
import { defineHastPlugin, defineMdastPlugin } from 'satteri';

import { symbolSvg } from '../utils/fontAwesome';
import { slugify } from '../utils/slugify';
import { pageUrl, postUrl } from '../utils/urls';

const contentDir = fileURLToPath(new URL('../content/', import.meta.url));

/** Public URL of the document being rendered, used for heading anchor links. */
const documentUrl = (fileURL: URL | undefined): string => {
  if (!fileURL) return '';

  const relativePath = path.relative(contentDir, fileURLToPath(fileURL)).replace(/\\/g, '/');
  const [collection, ...rest] = relativePath.replace(/\.md$/, '').split('/');
  const id = rest.join('/');

  if (collection === 'posts') return postUrl(id);
  if (collection === 'pages') return pageUrl(id);

  return '';
};

/** Wraps known acronyms in `<abbr title="…">`. */
export const acronymsPlugin = (acronyms: Record<string, string>) => {
  const acronymsRegExp = new RegExp(`\\b(${Object.keys(acronyms).join('|')})\\b`, 'g');

  return defineHastPlugin({
    name: 'acronyms',
    text(node, ctx) {
      for (let ancestor = ctx.parent(node); ancestor?.type === 'element'; ancestor = ctx.parent(ancestor)) {
        if (['code', 'pre', 'abbr'].includes(ancestor.tagName)) return;
      }

      // Odd indices of the split result are the captured acronyms.
      const parts = node.value.split(acronymsRegExp);

      if (parts.length === 1) return;

      const nodes = parts.map((value, index): ElementContent => (index % 2 ? { type: 'element', tagName: 'abbr', properties: { title: acronyms[value] }, children: [{ type: 'text', value }] } : { type: 'text', value })).filter((child) => child.type !== 'text' || child.value);

      ctx.replaceNode(node, nodes);
    },
  });
};

/** Adds an `id` and a hover anchor link to every heading. */
export const headingAnchorsPlugin = defineHastPlugin({
  name: 'heading-anchors',
  element: {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    visit(node, ctx) {
      const id = slugify(ctx.textContent(node));

      ctx.setProperty(node, 'id', id);
      ctx.appendChild(node, {
        type: 'element',
        tagName: 'a',
        properties: { href: `${documentUrl(ctx.fileURL)}#${id}`, className: ['anchor'], ariaLabelledBy: [id] },
        children: [{ type: 'raw', value: symbolSvg('header-anchor') }],
      });
    },
  },
});

/** Turns a paragraph holding a single titled image into a `<figure>` with a `<figcaption>`. */
export const figuresPlugin = defineHastPlugin({
  name: 'figures',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const children = node.children.filter((child) => !(child.type === 'text' && !child.value.trim()));
      const [image] = children;

      if (children.length !== 1 || image.type !== 'element' || image.tagName !== 'img' || !image.properties.title) return;

      const caption: Element = {
        type: 'element',
        tagName: 'figcaption',
        properties: {},
        children: [{ type: 'raw', value: symbolSvg('figure-caption') }, { type: 'text', value: String(image.properties.title) } satisfies Text],
      };

      ctx.replaceNode(node, { type: 'element', tagName: 'figure', properties: {}, children: [image, caption] });
    },
  },
});

/** Links `<time datetime="…">` tags to timeanddate.com so readers can see the time in their own time zone. */
export const timeLinksPlugin = defineMdastPlugin({
  name: 'time-links',
  html(node, ctx) {
    const match = /^<time datetime="([^"]+)">$/.exec(node.value);

    if (match) {
      const iso = new Date(match[1]).toISOString();

      ctx.replaceNode(node, { type: 'html', value: `<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=${iso}">${node.value}` });
    } else if (node.value === '</time>') {
      ctx.replaceNode(node, { type: 'html', value: '</time></a>' });
    }
  },
});

const fetchOrThrow = async (url: string): Promise<Response> => {
  const response = await fetch(url);

  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);

  return response;
};

/**
 * Replaces GitHub gist `<script>` embeds with the gist's files as code blocks, fetched at build time.
 * Uses the same public endpoints as the embed script, avoiding the rate-limited GitHub REST API.
 */
export const gistsPlugin = defineMdastPlugin({
  name: 'gists',
  async html(node, ctx) {
    const match = /^<script src="https:\/\/gist\.github\.com\/([^/]+)\/([0-9a-f]+)\.js(?:\?file=([^"]+))?"><\/script>$/.exec(node.value.trim());

    if (!match) return;

    const [, user, id, file] = match;
    const { files } = (await (await fetchOrThrow(`https://gist.github.com/${user}/${id}.json`)).json()) as { files: string[] };

    const codeNodes = await Promise.all(
      files
        .filter((filename) => !file || filename === file)
        .map(async (filename): Promise<Code> => ({
          type: 'code',
          lang: path.extname(filename).slice(1) || null,
          meta: null,
          value: await (await fetchOrThrow(`https://gist.githubusercontent.com/${user}/${id}/raw/${encodeURIComponent(filename)}`)).text(),
        }))
    );

    ctx.replaceNode(node, codeNodes);
  },
});
