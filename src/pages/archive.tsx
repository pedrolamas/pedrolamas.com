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
    allMdx(filter: {fields: {slug: {ne: null}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
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

export default ArchivePage;
