import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faRss, faShareAlt, faCalendarAlt, faFolder, faTags, faComment, faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';

type ArticleSymbolNames = 'article-posted-on' | 'article-categories' | 'article-tags' | 'article-comments' | 'article-edit';
type HeaderSymbolNames = 'header-anchor';
type SidebarSymbolNames = 'sidebar-twitter' | 'sidebar-facebook' | 'sidebar-linkedin' | 'sidebar-github' | 'sidebar-rss' | 'sidebar-default' | 'sidebar-mastodon';
type FigureSymbolNames = 'figure-caption';
type ShareSymbolNames = 'share-facebook' | 'share-twitter' | 'share-linkedin' | 'share-whatsapp' | 'share-email' | 'share-mastodon';

export type SymbolNames = ArticleSymbolNames | HeaderSymbolNames | SidebarSymbolNames | FigureSymbolNames | ShareSymbolNames;

type SymbolsType = {
  [key in SymbolNames]: IconDefinition;
};

export const Symbols: SymbolsType = {
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
};
