import React from 'react';

import SidebarSocialLink from './sidebarSocialLink';
import SiteContext from '../../../siteContext';
import { FontAwesome } from '../../../../utils';

type SidebarSocialProps = {
  children?: never;
};

const SidebarSocial: React.FunctionComponent<SidebarSocialProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { social } = siteMetadata;

  return (
    <nav className="sidebar-social" role="navigation" aria-label="Social Links Menu">
      {social?.links?.map((link, index) => {
        if (!link) {
          return null;
        }

        let linkTitle = '';
        let symbolName: FontAwesome.SymbolNames = 'sidebar-default';

        if (link.includes('twitter.com')) {
          linkTitle = 'Twitter';
          symbolName = 'sidebar-twitter';
        } else if (link.includes('facebook.com')) {
          linkTitle = 'Facebook';
          symbolName = 'sidebar-facebook';
        } else if (link.includes('linkedin.com')) {
          linkTitle = 'LinkedIn';
          symbolName = 'sidebar-linkedin';
        } else if (link.includes('github.com')) {
          linkTitle = 'GitHub';
          symbolName = 'sidebar-github';
        }

        return <SidebarSocialLink url={link} title={linkTitle} symbolName={symbolName} key={index} />;
      })}
      <SidebarSocialLink url="/feeds" title="Syndicated Feeds" symbolName="sidebar-rss" />
    </nav>
  );
};

SidebarSocial.displayName = 'SidebarSocial';

export default SidebarSocial;
