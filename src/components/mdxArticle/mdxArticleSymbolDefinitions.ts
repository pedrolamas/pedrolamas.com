import { IconName } from '@fortawesome/fontawesome-svg-core';

export type MdxArticleSymbolNamesType = 'article-posted-on' | 'article-categories' | 'article-tags' | 'article-comments' | 'article-edit';

export type MdxArticleSymbolDefinitionsType = {
  [key in MdxArticleSymbolNamesType]: IconName;
};

export const MdxArticleSymbolDefinitions: MdxArticleSymbolDefinitionsType = {
  'article-posted-on': 'calendar-alt',
  'article-categories': 'folder',
  'article-tags': 'tags',
  'article-comments': 'comment',
  'article-edit': 'edit',
};
