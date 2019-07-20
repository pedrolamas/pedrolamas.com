import React from 'react';

import MdxArticle from '../mdxArticle';
import Link from '../link';
import MdxContext from '../mdxContext';
import { GraphQl, Utils } from '../../utils';

type IndexLayoutPostsProps = {
  data: GraphQl.IndexLayoutQuery;
};

const IndexLayoutPosts: React.FunctionComponent<IndexLayoutPostsProps> = ({ data }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  return (
    <>
      {posts.map(({ node }, index) => {
        const mdxMeta = Utils.SafeMetadataFromMdx(node);
        const { id, title, url } = mdxMeta;

        return (
          <MdxContext.Provider
            value={{
              mdx: node,
              meta: mdxMeta,
            }}
            key={index}
          >
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
