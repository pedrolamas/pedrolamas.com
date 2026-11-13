import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Element, ElementContent, Text } from 'hast';
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
        children: [{ type: 'raw', value: symbolSvg('icon-link') }],
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
        children: [{ type: 'raw', value: symbolSvg('icon-info') }, { type: 'text', value: String(image.properties.title) } satisfies Text],
      };

      ctx.replaceNode(node, { type: 'element', tagName: 'figure', properties: {}, children: [image, caption] });
    },
  },
});

/**
 * Points `/wp-content/...` images at the submodule (the `@wp-content` alias in tsconfig.json) so Astro optimizes them.
 * Animated GIFs are left alone, because optimization keeps only their first frame.
 */
export const wpContentImagesPlugin = defineMdastPlugin({
  name: 'wp-content-images',
  image(node, ctx) {
    if (!node.url.startsWith('/wp-content/') || /\.gif$/i.test(node.url)) return;

    ctx.replaceNode(node, { ...node, url: node.url.replace('/wp-content/', '@wp-content/') });
  },
});

/** Links `<time datetime="…">` tags to timeanddate.com so readers can see the time in their own time zone. */
export const timeLinksPlugin = defineMdastPlugin({
  name: 'time-links',
  html(node, ctx) {
    const match = /^<time datetime="([^"]+)">$/.exec(node.value);
    const date = match && new Date(match[1]);

    if (date && !Number.isNaN(date.getTime())) {
      const iso = date.toISOString();

      ctx.data.openTimeLinks = (Number(ctx.data.openTimeLinks) || 0) + 1;
      ctx.replaceNode(node, { type: 'html', value: `<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=${iso}">${node.value}` });
    } else if (node.value === '</time>' && Number(ctx.data.openTimeLinks) > 0) {
      // Only close the links this plugin opened, counted per document.
      ctx.data.openTimeLinks = Number(ctx.data.openTimeLinks) - 1;
      ctx.replaceNode(node, { type: 'html', value: '</time></a>' });
    }
  },
});
