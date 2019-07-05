import React from 'react';

import SitemapLayoutEntry from './sitemapLayoutEntry';
import PageLayout from '../../components/pageLayout';
import SiteContext from '../../components/siteContext';
import { GraphQl } from '../../utils';

type SitemapLayoutProps = {
  data: GraphQl.SitemapPageQuery;
};

const SitemapLayout: React.FunctionComponent<SitemapLayoutProps> = ({ data }) => {
  const { allSitemapYaml } = data;

  if (!allSitemapYaml) throw Error('AllSitemapYaml expected!');

  return (
    <PageLayout title="Site Map">
      <SiteContext.Consumer>
        {siteContext => (
          <ul>
            <SitemapLayoutEntry title={siteContext.siteMetadata && siteContext.siteMetadata.title} url="/" sub={allSitemapYaml.edges.map(edge => edge.node)} />
          </ul>
        )}
      </SiteContext.Consumer>
    </PageLayout>
  );
};

export default SitemapLayout;
