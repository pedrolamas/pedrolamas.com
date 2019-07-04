import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/pageLayout';
import Link from '../components/link';
import SiteContext from '../components/siteContext';
import { GraphQl } from '../utils';

type SitemapEntryProps = GraphQl.SitemapYamlSub;

type SitemapPageProps = {
  data: GraphQl.SitemapPageQuery;
};

const SitemapEntry: React.FunctionComponent<SitemapEntryProps> = ({ title, url, sub }) => (
  <li>
    {url ? <Link to={url}>{title}</Link> : title}
    {sub && <ul>{sub.map((subnode, index) => subnode && <SitemapEntry title={subnode.title} url={subnode.url} sub={subnode.sub} key={index} />)}</ul>}
  </li>
);

const SitemapPage: React.FunctionComponent<SitemapPageProps> = ({ data }) => {
  const { allSitemapYaml } = data;

  if (!allSitemapYaml) throw Error('AllSitemapYaml expected!');

  return (
    <PageLayout title="Site Map">
      <SiteContext.Consumer>
        {siteContext => (
          <ul>
            <SitemapEntry title={siteContext.siteMetadata && siteContext.siteMetadata.title} url="/" sub={allSitemapYaml.edges.map(edge => edge.node)} />
          </ul>
        )}
      </SiteContext.Consumer>
    </PageLayout>
  );
};

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

export default SitemapPage;
