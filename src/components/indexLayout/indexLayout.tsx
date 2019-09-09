import React from 'react';
import { graphql } from 'gatsby';

import Head from '../head';
import IndexLayoutPosts from './indexLayoutPosts';
import IndexLayoutNavigation from './indexLayoutNavigation';
import { GraphQl } from '../../utils';

type IndexLayoutProps = {
  data: GraphQl.IndexLayoutQuery;
  pageContext: {
    previousPageIndex?: number;
    nextPageIndex?: number;
  };
};

const IndexLayout: React.FunctionComponent<IndexLayoutProps> = ({ data, pageContext }) => (
  <>
    <Head type="index" />

    <IndexLayoutPosts data={data} />

    <IndexLayoutNavigation previousPageIndex={pageContext.previousPageIndex} nextPageIndex={pageContext.nextPageIndex} />
  </>
);

IndexLayout.displayName = 'IndexLayout';

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
