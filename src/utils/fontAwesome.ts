import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faRss, faShareAlt, faCalendarAlt, faFolder, faTags, faComment, faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';

export const Symbols = {
  'icon-calendar': faCalendarAlt,
  'icon-comment': faComment,
  'icon-edit': faEdit,
  'icon-envelope': faEnvelope,
  'icon-facebook': faFacebookF,
  'icon-folder': faFolder,
  'icon-github': faGithub,
  'icon-info': faInfo,
  'icon-link': faLink,
  'icon-linkedin': faLinkedinIn,
  'icon-mastodon': faMastodon,
  'icon-rss': faRss,
  'icon-share': faShareAlt,
  'icon-tags': faTags,
  'icon-twitter': faTwitter,
  'icon-whatsapp': faWhatsapp,
} satisfies Record<string, IconDefinition>;

export type SymbolName = keyof typeof Symbols;

/** Markup referencing a symbol from the sprite rendered by `Symbols.astro`. */
export const symbolSvg = (name: SymbolName): string => {
  const [width, height] = Symbols[name].icon;

  return `<svg class="svg-inline--fa" viewBox="0 0 ${width} ${height}" aria-hidden="true"><use href="#${name}"></use></svg>`;
};

/** Markup for a `<symbol>` definition of an icon. */
export const symbolDefinition = ([name, { icon }]: [string, IconDefinition]): string => {
  const [width, height, , , svgPathData] = icon;
  const paths = Array.isArray(svgPathData) ? svgPathData : [svgPathData];

  return `<symbol id="${name}" viewBox="0 0 ${width} ${height}">${paths.map((d) => `<path fill="currentColor" d="${d}"></path>`).join('')}</symbol>`;
};
