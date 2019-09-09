import React from 'react';

import MdxArticleMetaPostedOn from './mdxArticleMetaPostedOn';
import MdxArticleMetaCategories from './mdxArticleMetaCategories';
import MdxArticleMetaTags from './mdxArticleMetaTags';
import MdxArticleMetaComments from './mdxArticleMetaComments';
import MdxArticleMetaEdit from './mdxArticleMetaEdit';

type MdxArticleMetaProps = {
  children?: never;
};

const MdxArticleMeta: React.FunctionComponent<MdxArticleMetaProps> = () => (
  <div className="post-meta">
    <MdxArticleMetaPostedOn />

    <MdxArticleMetaCategories />

    <MdxArticleMetaTags />

    <MdxArticleMetaComments />

    <MdxArticleMetaEdit />
  </div>
);

MdxArticleMeta.displayName = 'MdxArticleMeta';

export default MdxArticleMeta;
