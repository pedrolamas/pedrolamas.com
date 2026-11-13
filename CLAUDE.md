# CLAUDE.md

Personal blog built with [Astro](https://astro.build/) (static output) and deployed by Netlify. See `README.md` for setup.

## Commands

- `pnpm dev`: local dev server
- `pnpm lint`: ESLint and Prettier checks (`pnpm format` fixes them)
- `pnpm check`: type check (`astro check`)
- `pnpm build`: production build into `dist/`

Run `pnpm lint`, `pnpm check` and `pnpm build` before reporting work as done.

## Layout

- `src/content/posts`, `src/content/pages`: markdown content (collections in `src/content.config.ts`).
- `src/content/assets/wp-content`: git submodule with legacy WordPress uploads, copied to `/wp-content/` on build and served there in dev (see the `wpContent` integration in `astro.config.ts`).
- `src/plugins/markdown.ts`: Sätteri markdown plugins (acronyms, heading anchors, figures, `<time>` links, `/wp-content/` image mapping).
- `src/utils`: URL, slug, post and feed helpers. `slugify` is a port of underscore.string and must stay byte-compatible.
- `src/data`: site metadata, acronyms and the sitemap page data.
- `public/sw.js`: kill-switch that unregisters the old Gatsby service worker. Keep it.

## Rules

- Public URLs must not change: posts at `/YYYY/MM/DD/slug/`, tags/categories, heading IDs, feeds, `/wp-content/...` files.
- Use pnpm only; never add a Yarn or npm lockfile.
- Images are referenced as `/wp-content/...`, in markdown and in the frontmatter `image:`. `wpContentImagesPlugin` and the `image` schema in `src/content.config.ts` map them to the submodule through the `@wp-content` alias in `tsconfig.json`, so they get optimized. GIFs are skipped, because optimization drops their animation.
- After changing a markdown plugin, delete `node_modules/.astro` and `.astro`, because Astro caches rendered markdown.
- Disqus threads are matched by page URL with an empty identifier; don't change that.
- TypeScript stays on 6.x until `@astrojs/check` and typescript-eslint support 7.
