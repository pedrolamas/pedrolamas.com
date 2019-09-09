import React from 'react';

import MdxArticle from '../mdxArticle';
import MdxContext from '../mdxContext';

type PostLayoutArticleProps = {
  children?: never;
};

const PostLayoutArticle: React.FunctionComponent<PostLayoutArticleProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { id, title } = meta;

  return (
    <article id={`post${id}`} className={`post post${id}`}>
      <header className="post-header">
        <h1 className="post-title">{title}</h1>
      </header>

      <MdxArticle />
    </article>
  );
};

PostLayoutArticle.displayName = 'PostLayoutArticle';

export default PostLayoutArticle;
