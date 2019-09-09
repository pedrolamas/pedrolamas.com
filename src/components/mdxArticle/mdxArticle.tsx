import React from 'react';

import MdxArticleImage from './mdxArticleImage';
import MdxArticleMeta from './mdxArticleMeta';
import MdxArticleContent from './mdxArticleContent';

type MdxArticleProps = {
  children?: never;
};

const MdxArticle: React.FunctionComponent<MdxArticleProps> = () => (
  <>
    <MdxArticleImage />

    <MdxArticleMeta />

    <MdxArticleContent />
  </>
);

MdxArticle.displayName = 'MdxArticle';

export default MdxArticle;
