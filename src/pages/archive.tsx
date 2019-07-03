import React from 'react';
import { graphql } from 'gatsby';

import ArchiveLayout from '../components/archiveLayout';
import { ArchivePageQuery } from '../generated/graphql';

type ArchivePageProps = {
  data: ArchivePageQuery;
};

const ArchivePage: React.FunctionComponent<ArchivePageProps> = ({ data }) => <ArchiveLayout title="Archive" data={data} />;

export const pageQuery = graphql`
  query ArchivePage {
    allMdx(filter: { fields: { slug: { ne: null } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...PostMdx
        }
      }
    }
  }
`;

export default ArchivePage;
