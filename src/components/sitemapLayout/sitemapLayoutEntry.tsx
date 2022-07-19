import React from 'react';

import Link from '../../components/link';

type SitemapLayoutEntryProps = Queries.SitemapYamlSub;

const SitemapLayoutEntry: React.FunctionComponent<SitemapLayoutEntryProps> = ({ title, url, sub }) => (
  <li>
    {url ? <Link to={url}>{title}</Link> : title}
    {sub && <ul>{sub.map((subnode, index) => subnode && <SitemapLayoutEntry title={subnode.title} url={subnode.url} sub={subnode.sub} key={index} />)}</ul>}
  </li>
);

SitemapLayoutEntry.displayName = 'SitemapLayoutEntry';

export default SitemapLayoutEntry;
