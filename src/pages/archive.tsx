import React from 'react';
import { graphql } from 'gatsby';

import { Query } from '../generated';
import ArchiveLayout from '../components/archiveLayout';

type ArchivePageProps = {
  data: Query;
}

const ArchivePage: React.FunctionComponent<ArchivePageProps> = ({ data }) => (
  <ArchiveLayout title="Archive" data={data} />
)

export const pageQuery = graphql`
  {
    allMdx(
      filter: {
        fields: {
          slug: {
            ne: null
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

export default ArchivePage;
