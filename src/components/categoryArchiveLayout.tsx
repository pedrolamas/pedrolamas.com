import React from 'react';
import { graphql } from 'gatsby';

import ArchiveLayout from './archiveLayout';
import { Query } from '../generated/graphql';

type CategoryArchiveLayoutProps = {
  data: Query;
  pageContext: {
    category: string;
  }
}

const CategoryArchiveLayout: React.FunctionComponent<CategoryArchiveLayoutProps> = ({ data, pageContext }) => {
  const { category } = pageContext;

  return (
    <ArchiveLayout title={`Category: ${category}`} data={data} />
  );
}

export const pageQuery = graphql`
  query($category: String!)
  {
    allMdx(
      filter: {
        fields: {
          slug: {
            ne: null
          }
        },
        frontmatter: {
          categories: {
            eq: $category
          }
        }
      },
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    )
    {
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

export default CategoryArchiveLayout;
