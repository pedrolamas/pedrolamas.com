import React from 'react';
import { graphql } from 'gatsby';

import ArchiveLayout from './archiveLayout';
import { GraphQl } from '../utils';

type CategoryArchiveLayoutProps = {
  data: GraphQl.CategoryArchiveLayoutQuery;
  pageContext: {
    category: string;
  };
};

const CategoryArchiveLayout: React.FunctionComponent<CategoryArchiveLayoutProps> = ({ data, pageContext }) => {
  const { category } = pageContext;

  return <ArchiveLayout title={`Category: ${category}`} data={data} />;
};

CategoryArchiveLayout.displayName = 'CategoryArchiveLayout';

export const pageQuery = graphql`
  query CategoryArchiveLayout($category: String!) {
    allMdx(filter: { fields: { slug: { ne: null } }, frontmatter: { categories: { eq: $category } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

export default CategoryArchiveLayout;
