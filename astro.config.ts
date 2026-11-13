import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import githubLight from '@shikijs/themes/github-light';

import { acronyms } from './src/data/acronyms';
import { siteMetadata } from './src/data/siteMetadata';
import { acronymsPlugin, figuresPlugin, headingAnchorsPlugin, timeLinksPlugin, wpContentImagesPlugin } from './src/plugins/markdown';
import { postUrl } from './src/utils/urls';

const postsDir = './src/content/posts';
const wpContentDir = './src/content/assets/wp-content';

const frontmatterDate = (frontmatter: string, key: string): Date | undefined => {
  const value = new RegExp(`^${key}:\\s*['"]?([^'"\\n]+)`, 'm').exec(frontmatter)?.[1];
  const date = value ? new Date(value.trim()) : undefined;

  return date && !Number.isNaN(date.getTime()) ? date : undefined;
};

// Sitemap lastmod per post URL
const postsLastModified = new Map(
  fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(fs.readFileSync(path.join(postsDir, file), 'utf-8'))?.[1] ?? '';
      const lastModified = frontmatterDate(frontmatter, 'last_modified_at') ?? frontmatterDate(frontmatter, 'date');

      return [new URL(postUrl(file.replace(/\.md$/, '')), siteMetadata.siteUrl).href, lastModified?.toISOString()];
    })
);

const isHidden = (relativePath: string): boolean => relativePath.split(/[\\/]/).some((segment) => segment.startsWith('.'));

// Serves the wp-content submodule at /wp-content/
const wpContent = (): AstroIntegration => ({
  name: 'wp-content',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const root = path.resolve(wpContentDir);

      server.middlewares.use('/wp-content', (req, res, next) => {
        const relativePath = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname).replace(/^\/+/, '');
        const filePath = path.resolve(root, relativePath);

        if (!filePath.startsWith(root + path.sep) || isHidden(relativePath) || !fs.statSync(filePath, { throwIfNoEntry: false })?.isFile()) return next();

        fs.createReadStream(filePath).pipe(res);
      });
    },
    'astro:build:done': ({ dir }) => {
      fs.cpSync(wpContentDir, fileURLToPath(new URL('wp-content/', dir)), { recursive: true, filter: (source) => !isHidden(path.relative(wpContentDir, source)) });
    },
  },
});

export default defineConfig({
  site: siteMetadata.siteUrl,
  trailingSlash: 'always',
  prefetch: { prefetchAll: true },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'PT Sans',
      cssVariable: '--font-pt-sans',
      weights: [400, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Helvetica', 'Arial', 'sans-serif'],
    },
  ],
  markdown: {
    shikiConfig: {
      // Background of the previous Prism theme
      theme: { ...githubLight, colors: { ...githubLight.colors, 'editor.background': '#f6f8fa' } },
    },
    processor: satteri({
      mdastPlugins: [timeLinksPlugin, wpContentImagesPlugin],
      hastPlugins: [acronymsPlugin(acronyms), headingAnchorsPlugin, figuresPlugin],
    }),
  },
  integrations: [
    sitemap({
      serialize: (item) => ({ ...item, lastmod: postsLastModified.get(item.url) }),
    }),
    wpContent(),
  ],
});
