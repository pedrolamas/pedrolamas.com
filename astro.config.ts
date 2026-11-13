import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

import { acronyms } from './src/data/acronyms';
import { siteMetadata } from './src/data/siteMetadata';
import { acronymsPlugin, figuresPlugin, gistsPlugin, headingAnchorsPlugin, timeLinksPlugin } from './src/plugins/markdown';
import { postUrl } from './src/utils/urls';

const postsDir = './src/content/posts';
const wpContentDir = './src/content/assets/wp-content';

/** Post URL → last modified date, for the sitemap. */
const postsLastModified = new Map(
  fs.readdirSync(postsDir).map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const lastModified = /^last_modified_at:\s*(.+)$/m.exec(content)?.[1] ?? /^date:\s*(.+)$/m.exec(content)?.[1];

    return [new URL(postUrl(file.replace(/\.md$/, '')), siteMetadata.siteUrl).href, lastModified && new Date(lastModified).toISOString()];
  })
);

/** Serves the legacy `/wp-content/` files (downloads and full size images linked from posts). */
const wpContent = (): AstroIntegration => ({
  name: 'wp-content',
  hooks: {
    'astro:build:done': ({ dir }) => {
      fs.cpSync(wpContentDir, fileURLToPath(new URL('wp-content/', dir)), { recursive: true, filter: (source) => path.basename(source) !== '.git' });
    },
  },
});

export default defineConfig({
  site: siteMetadata.siteUrl,
  trailingSlash: 'always',
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
      theme: 'github-light',
    },
    processor: satteri({
      mdastPlugins: [timeLinksPlugin, gistsPlugin],
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
