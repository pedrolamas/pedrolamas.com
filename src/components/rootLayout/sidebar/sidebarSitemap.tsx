import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Query } from '../../../generated/graphql';

import Link from '../../link';
import SiteContext from '../../siteContext';

type SidebarSitemapProps = {
  children?: never;
}

const SidebarSitemap: React.FunctionComponent<SidebarSitemapProps> = () => {
  const { allSitemapYaml }: Query = useStaticQuery<Query>(
    graphql`
      query {
        allSitemapYaml(filter: {minimap: {ne: false}}) {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `,
  );

  return (
    <SiteContext.Consumer>
      {siteContext => {
        const { siteMetadata } = siteContext;

        if (!siteMetadata) return null;

        return (
          <>
            {allSitemapYaml &&
              <nav className="sidebar-nav" role="navigation" aria-label="Primary Menu">
                {allSitemapYaml.edges.map(({ node }, index) => (
                  <Link className="sidebar-nav-item" to={node.url || ""} key={index}>{node.title}</Link>
                ))}
              </nav>
            }
          </>
        );
      }}
    </SiteContext.Consumer>
  );
}

export default SidebarSitemap;
