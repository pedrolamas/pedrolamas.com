import React from 'react';
import { graphql } from 'gatsby';

import Head from './head';
import RootLayout from './rootLayout';
import MdxArticle from './mdxArticle';
import Link from './link';
import { Query } from '../generated/graphql';

type PageIndexLayoutProps = {
  data: Query;
  pageContext: {
    previousPageIndex?: number;
    nextPageIndex?: number;
  };
}

const PageIndexLayout: React.FunctionComponent<PageIndexLayoutProps> = ({ data, pageContext }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  const { previousPageIndex, nextPageIndex } = pageContext;

  return (
    <RootLayout>
      <Head />
      {posts.map(({ node }, index) => {
        if (!node.frontmatter) return null;

        const { title } = node.frontmatter;

        return (
          <article id={`post${node.id}`} className={`post post${node.id}`} key={index}>
            <header className="post-header">
              <h1 className="post-title">
                {node.fields && node.fields.slug &&
                  <Link to={node.fields.slug} rel="bookmark">{title || "(untitled)"}</Link>
                }
              </h1>
            </header>

            <MdxArticle mdx={node} />
          </article>
        );
      })}

      <nav className="pagination">
        {nextPageIndex
          ? <Link className="pagination-item older" to={`/page/${nextPageIndex}/`}>Older</Link>
          : <span className="pagination-item older">Older</span>
        }
        {previousPageIndex
          ? <Link className="pagination-item newer" to={previousPageIndex === 1 ? "/" : `/page/${previousPageIndex}/`}>Newer</Link>
          : <span className="pagination-item newer">Newer</span>
        }
      </nav>
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query($ids: [String!]!) {
    allMdx(filter: {id: {in: $ids}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          code {
            body
          }
          fields {
            slug
          }
          frontmatter {
            categories
            date
            dateFormatted
            image {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            last_modified_at
            layout
            tags
            title
          }
        }
      }
    }
  }
`;

export default PageIndexLayout;
