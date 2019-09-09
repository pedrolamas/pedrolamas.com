import React from 'react';
import { graphql } from 'gatsby';

import ArchiveLayout from './archiveLayout';
import { GraphQl } from '../utils';

type TagArchiveLayoutProps = {
  data: GraphQl.TagArchiveLayoutQuery;
  pageContext: {
    tag: string;
  };
};

const TagArchiveLayout: React.FunctionComponent<TagArchiveLayoutProps> = ({ data, pageContext }) => {
  const { tag } = pageContext;

  return <ArchiveLayout title={`Tag: ${tag}`} data={data} />;
};

export const pageQuery = graphql`
  query TagArchiveLayout($tag: String!) {
    allMdx(filter: { fields: { slug: { ne: null } }, frontmatter: { tags: { eq: $tag } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

TagArchiveLayout.displayName = 'TagArchiveLayout';

export default TagArchiveLayout;
