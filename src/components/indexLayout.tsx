import React from 'react';
import { graphql } from 'gatsby';

import Head from './head';
import RootLayout from './rootLayout';
import MdxArticle from './mdxArticle';
import Link from './link';
import { Query } from '../generated/graphql';
import MdxContext from './mdxContext';

type PageIndexLayoutProps = {
  data: Query;
  pageContext: {
    previousPageIndex?: number;
    nextPageIndex?: number;
  };
};

const PageIndexLayout: React.FunctionComponent<PageIndexLayoutProps> = ({ data, pageContext }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  const { previousPageIndex, nextPageIndex } = pageContext;

  return (
    <RootLayout>
      <Head />
      {posts.map(({ node }, index) => {
        const { id, fields, frontmatter } = node;

        const title = (frontmatter && frontmatter.title) || '(untitled)';

        return (
          <MdxContext.Provider value={node}>
            <article id={`post${id}`} className={`post post${id}`} key={index}>
              <header className='post-header'>
                <h1 className='post-title'>
                  {fields && fields.slug && (
                    <Link to={fields.slug} rel='bookmark'>
                      {title}
                    </Link>
                  )}
                </h1>
              </header>

              <MdxArticle />
            </article>
          </MdxContext.Provider>
        );
      })}

      <nav className='pagination'>
        {nextPageIndex ? (
          <Link className='pagination-item older' to={`/page/${nextPageIndex}/`}>
            Older
          </Link>
        ) : (
          <span className='pagination-item older'>Older</span>
        )}
        {previousPageIndex ? (
          <Link className='pagination-item newer' to={previousPageIndex === 1 ? '/' : `/page/${previousPageIndex}/`}>
            Newer
          </Link>
        ) : (
          <span className='pagination-item newer'>Newer</span>
        )}
      </nav>
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query($ids: [String!]!) {
    allMdx(filter: { id: { in: $ids } }, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

export default PageIndexLayout;
