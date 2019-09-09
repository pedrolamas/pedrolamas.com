import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '../../link';
import { GraphQl } from '../../../utils';

type SidebarSitemapProps = {
  children?: never;
};

const SidebarSitemap: React.FunctionComponent<SidebarSitemapProps> = () => {
  const { allSitemapYaml } = useStaticQuery<GraphQl.SidebarSitemapQuery>(
    graphql`
      query SidebarSitemap {
        allSitemapYaml(filter: { minimap: { ne: false } }) {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `
  );

  return (
    <nav className="sidebar-nav" role="navigation" aria-label="Primary Menu">
      {allSitemapYaml.edges.map(({ node }, index) => {
        const title = node.title || '(untitled)';
        const url = node.url || '';

        return (
          <Link className="sidebar-nav-item" to={url} key={index}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

SidebarSitemap.displayName = 'SidebarSitemap';

export default SidebarSitemap;
