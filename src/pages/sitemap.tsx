import React from 'react';
import { graphql } from 'gatsby';

import SitemapLayout from '../components/sitemapLayout';

type SitemapPageProps = {
  data: Queries.SitemapPageQuery;
};

const SitemapPage: React.FunctionComponent<SitemapPageProps> = ({ data }) => <SitemapLayout data={data} />;

export const pageQuery = graphql`
  query SitemapPage {
    allSitemapYaml {
      edges {
        node {
          title
          url
          sub {
            title
            url
            sub {
              title
              url
            }
          }
        }
      }
    }
  }
`;

SitemapPage.displayName = 'SitemapPage';

export default SitemapPage;
