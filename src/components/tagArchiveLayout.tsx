import React from 'react';
import { graphql } from 'gatsby';

import ArchiveLayout from './archiveLayout';
import { Query } from '../generated';

type TagArchiveLayoutProps = {
  data: Query;
  pageContext: {
    tag: string;
  }
}

const TagArchiveLayout: React.FunctionComponent<TagArchiveLayoutProps> = ({ data, pageContext }) => {
  const { tag } = pageContext;

  return (
    <ArchiveLayout title={`Tag: ${tag}`} data={data} />
  );
}

export const pageQuery = graphql`
  query($tag: String!)
  {
    allMdx(
      filter: {
        fields: {
          slug: {
            ne: null
          }
        },
        frontmatter: {
          tags: {
            eq: $tag
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

export default TagArchiveLayout;
