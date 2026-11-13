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

Posts live in `src/content/posts` and pages in `src/content/pages`.

## License

The following directories and their contents are Copyright Pedro Lamas. You may not reuse anything therein without my permission:

- /src/content

All other directories and files are MIT Licensed. Feel free to use any of it as you please.
