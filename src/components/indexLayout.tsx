import React from 'react';
import { graphql } from 'gatsby';

import Head from './head';
import RootLayout from './rootLayout';
import MdxArticle from './mdxArticle';
import Link from './link';
import MdxContext from './mdxContext';
import { Utils, GraphQl } from '../utils';

type IndexLayoutProps = {
  data: GraphQl.IndexLayoutQuery;
  pageContext: {
    previousPageIndex?: number;
    nextPageIndex?: number;
  };
};

const IndexLayout: React.FunctionComponent<IndexLayoutProps> = ({ data, pageContext }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  const { previousPageIndex, nextPageIndex } = pageContext;

  return (
    <RootLayout>
      <Head />
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

      <nav className="pagination">
        {nextPageIndex ? (
          <Link className="pagination-item older" to={`/page/${nextPageIndex}/`}>
            Older
          </Link>
        ) : (
          <span className="pagination-item older">Older</span>
        )}
        {previousPageIndex ? (
          <Link className="pagination-item newer" to={previousPageIndex === 1 ? '/' : `/page/${previousPageIndex}/`}>
            Newer
          </Link>
        ) : (
          <span className="pagination-item newer">Newer</span>
        )}
      </nav>
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query IndexLayout($ids: [String!]!) {
    allMdx(filter: { id: { in: $ids } }, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

export default IndexLayout;
