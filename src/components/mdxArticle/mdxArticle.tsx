import React from 'react';

import MdxArticleImage from './mdxArticleImage';
import MdxArticleMeta from './mdxArticleMeta';
import MdxArticleContent from './mdxArticleContent';
import MdxArticleContext from './mdxArticleContext';
import { Mdx } from '../../generated/graphql';

type MdxArticleProps = {
  mdx: Mdx;
  children?: never;
}

const MdxArticle: React.FunctionComponent<MdxArticleProps> = ({ mdx }) => (
  <MdxArticleContext.Provider value={mdx}>
    <MdxArticleImage />

    <MdxArticleMeta />

    <MdxArticleContent />
  </MdxArticleContext.Provider>
);

export default MdxArticle;
