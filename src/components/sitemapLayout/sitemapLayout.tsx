import React, { useContext } from 'react';

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

  const { siteMetadata } = useContext(SiteContext);

  return (
    <PageLayout title="Site Map">
      <ul>
        <SitemapLayoutEntry title={siteMetadata && siteMetadata.title} url="/" sub={allSitemapYaml.edges.map(edge => edge.node)} />
      </ul>
    </PageLayout>
  );
};

export default SitemapLayout;
