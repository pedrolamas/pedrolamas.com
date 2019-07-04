import React from 'react';

import MdxArticle from '../mdxArticle';
import MdxContext from '../mdxContext';
import { Utils } from '../../utils';

type PostLayoutArticleProps = {
  children?: never;
};

const PostLayoutArticle: React.FunctionComponent<PostLayoutArticleProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { id, title } = Utils.SafeMetadataFromMdx(mdx);

      return (
        <article id={`post${id}`} className={`post post${id}`}>
          <header className="post-header">
            <h1 className="post-title">{title}</h1>
          </header>

          <MdxArticle />
        </article>
      );
    }}
  </MdxContext.Consumer>
);

export default PostLayoutArticle;
