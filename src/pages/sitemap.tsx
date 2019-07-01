import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/pageLayout';
import Link from '../components/link';
import SiteContext from '../components/siteContext';
import { Query, SitemapYamlSub, Maybe } from '../generated/graphql';

type SitemapEntryProps = {
  title?: string | null;
  url?: string | null;
  subNodes?: Maybe<SitemapYamlSub>[] | null;
};

type SitemapPageProps = {
  data: Query;
};

const SitemapEntry: React.FunctionComponent<SitemapEntryProps> = ({ title, url, subNodes }) => (
  <li>
    {url ? <Link to={url}>{title}</Link> : title}
    {subNodes && <ul>{subNodes.map((subnode, index) => subnode && <SitemapEntry title={subnode.title} url={subnode.url} subNodes={subnode.sub} key={index} />)}</ul>}
  </li>
);

const SitemapPage: React.FunctionComponent<SitemapPageProps> = ({ data }) => {
  const { allSitemapYaml } = data;

  if (!allSitemapYaml) throw Error('AllSitemapYaml expected!');

  return (
    <PageLayout title='Site Map'>
      <SiteContext.Consumer>
        {siteContext => (
          <ul>
            <SitemapEntry title={siteContext.siteMetadata && siteContext.siteMetadata.title} url='/' subNodes={allSitemapYaml.edges.map(edge => edge.node)} />
          </ul>
        )}
      </SiteContext.Consumer>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  {
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
