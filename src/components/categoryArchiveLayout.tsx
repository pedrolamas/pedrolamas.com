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
      }, sort: {
        order: DESC, fields: [frontmatter___date]
      }
    )
    {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

export default CategoryArchiveLayout;
