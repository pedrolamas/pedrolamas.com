import React from 'react';

import MdxArticle from '../mdxArticle';
import Link from '../link';
import MdxContext from '../mdxContext';
import { Utils, GraphQl } from '../../utils';

type IndexLayoutPostsProps = {
  data: GraphQl.IndexLayoutQuery;
};

const IndexLayoutPosts: React.FunctionComponent<IndexLayoutPostsProps> = ({ data }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  return (
    <>
      {posts.map(({ node }, index) => {
        const { id, title, url } = Utils.SafeMetadataFromMdx(node);

        return (
          <MdxContext.Provider value={node} key={index}>
            <article id={`post${id}`} className={`post post${id}`}>
              <header className="post-header">
                <h1 className="post-title">
                  <Link to={url} rel="bookmark">
                    {title}
                  </Link>
                </h1>
              </header>

              <MdxArticle />
            </article>
          </MdxContext.Provider>
        );
      })}
    </>
  );
};

export default IndexLayoutPosts;
