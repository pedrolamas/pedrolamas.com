import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '../../link';
import SiteContext from '../../siteContext';
import { Query } from '../../../generated/graphql';

type SidebarSitemapProps = {
  children?: never;
};

const SidebarSitemap: React.FunctionComponent<SidebarSitemapProps> = () => {
  const { allSitemapYaml }: Query = useStaticQuery<Query>(
    graphql`
      query {
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
    <SiteContext.Consumer>
      {siteContext => {
        const { siteMetadata } = siteContext;

        if (!siteMetadata) return null;

        return (
          <>
            {allSitemapYaml && (
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
            )}
          </>
        );
      }}
    </SiteContext.Consumer>
  );
};

export default SidebarSitemap;
