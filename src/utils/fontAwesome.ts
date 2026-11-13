import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faRss, faShareAlt, faCalendarAlt, faFolder, faTags, faComment, faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';

export const Symbols = {
  'article-posted-on': faCalendarAlt,
  'article-categories': faFolder,
  'article-tags': faTags,
  'article-comments': faComment,
  'article-edit': faEdit,
  'header-anchor': faLink,
  'sidebar-default': faShareAlt,
  'sidebar-twitter': faTwitter,
  'sidebar-facebook': faFacebookF,
  'sidebar-linkedin': faLinkedinIn,
  'sidebar-github': faGithub,
  'sidebar-mastodon': faMastodon,
  'sidebar-rss': faRss,
  'figure-caption': faInfo,
  'share-facebook': faFacebookF,
  'share-twitter': faTwitter,
  'share-linkedin': faLinkedinIn,
  'share-whatsapp': faWhatsapp,
  'share-email': faEnvelope,
  'share-mastodon': faMastodon,
} satisfies Record<string, IconDefinition>;

export type SymbolName = keyof typeof Symbols;

/** Markup referencing a symbol from the sprite rendered by `Symbols.astro`. */
export const symbolSvg = (name: SymbolName): string => {
  const [width, height] = Symbols[name].icon;

  return `<svg class="svg-inline--fa" viewBox="0 0 ${width} ${height}" aria-hidden="true"><use href="#${name}"></use></svg>`;
};

/** Markup for a `<symbol>` definition of an icon. */
export const symbolDefinition = (name: SymbolName): string => {
  const [width, height, , , svgPathData] = Symbols[name].icon;
  const paths = Array.isArray(svgPathData) ? svgPathData : [svgPathData];

  return `<symbol id="${name}" viewBox="0 0 ${width} ${height}">${paths.map((d) => `<path fill="currentColor" d="${d}"></path>`).join('')}</symbol>`;
};
