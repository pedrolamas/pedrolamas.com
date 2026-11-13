# pedrolamas.com

[![Build Status](https://github.com/pedrolamas/pedrolamas.com/workflows/CI/badge.svg)](https://github.com/pedrolamas/pedrolamas.com/actions 'Build Status')
[![Netlify status](https://img.shields.io/netlify/43444f2a-de38-4584-8017-32ebf0e7e6fe)](https://app.netlify.com/sites/elegant-swartz-5b0732/deploys)
[![Astro version](https://img.shields.io/github/package-json/dependency-version/pedrolamas/pedrolamas.com/astro)](https://www.npmjs.com/package/astro)
[![License](https://img.shields.io/github/license/pedrolamas/pedrolamas.com)](https://github.com/pedrolamas/pedrolamas.com/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/pedrolamas?style=social)](https://twitter.com/pedrolamas)

This is the source for [pedrolamas.com](https://www.pedrolamas.com).

It's built on top of [Astro](https://astro.build/) and currently hosted on [Netlify](https://www.netlify.com)!

## Development

Requirements: [Node.js](https://nodejs.org/) 26 (see `.nvmrc`) and [pnpm](https://pnpm.io/) (the version is pinned in `package.json`, so `corepack enable` will pick it up).

```sh
git clone --recurse-submodules https://github.com/pedrolamas/pedrolamas.com.git
cd pedrolamas.com
pnpm install
pnpm dev
```

If you already cloned without submodules, run `git submodule update --init` to fetch the images and downloads in `src/content/assets/wp-content`.

Other useful scripts:

- `pnpm build`: builds the static site into `dist/`
- `pnpm preview`: serves the built site locally
- `pnpm lint` / `pnpm format`: checks / fixes code style (ESLint and Prettier)
- `pnpm check`: type-checks the project (`astro check`)

## Content

- Posts live in `src/content/posts` (named `YYYY-MM-DD-slug.md`, published at `/YYYY/MM/DD/slug/`) and pages in `src/content/pages`.
- Images go through Astro's image optimization, so reference them with a relative path (for example `../assets/wp-content/uploads/...`).
- Animated GIFs must use the root-relative `/wp-content/...` URL instead, because image optimization keeps only the first frame.
- The `src/content/assets/wp-content` submodule is also served as-is at `/wp-content/`, both by `pnpm dev` and in the build output, for downloads and full-size image links.

## Deployment

Netlify builds the site with `pnpm build` and publishes `dist/` (see `netlify.toml`). The "Edit" link on each post uses the `REPOSITORY_URL` and `BRANCH` variables that Netlify sets automatically; it is hidden when they're missing, such as in local builds.

## License

The following directories and their contents are Copyright Pedro Lamas. You may not reuse anything therein without my permission:

- /src/content

All other directories and files are MIT Licensed. Feel free to use any of it as you please.
