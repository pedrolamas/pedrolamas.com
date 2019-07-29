import React from 'react';

import SidebarSocialLink from './sidebarSocialLink';
import SiteContext from '../../../siteContext';

type SidebarSocialProps = {
  children?: never;
};

const SidebarSocial: React.FunctionComponent<SidebarSocialProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { social } = siteMetadata;

  return (
    <nav className="sidebar-social" role="navigation" aria-label="Social Links Menu">
      {social &&
        social.links &&
        social.links.map((link, index) => {
          if (!link) {
            return null;
          }

          let linkTitle = '';

          if (link.includes('twitter.com')) {
            linkTitle = 'Twitter';
          } else if (link.includes('facebook.com')) {
            linkTitle = 'Facebook';
          } else if (link.includes('linkedin.com')) {
            linkTitle = 'LinkedIn';
          } else if (link.includes('github.com')) {
            linkTitle = 'GitHub';
          }

          return <SidebarSocialLink url={link} title={linkTitle} key={index} />;
        })}
      <SidebarSocialLink url="/feeds" title="Syndicated Feeds" />
    </nav>
  );
};

export default SidebarSocial;
