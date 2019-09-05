import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
          let icon: IconProp = 'share-alt';

          if (link.includes('twitter.com')) {
            linkTitle = 'Twitter';
            icon = ['fab', 'twitter'];
          } else if (link.includes('facebook.com')) {
            linkTitle = 'Facebook';
            icon = ['fab', 'facebook-f'];
          } else if (link.includes('linkedin.com')) {
            linkTitle = 'LinkedIn';
            icon = ['fab', 'linkedin-in'];
          } else if (link.includes('github.com')) {
            linkTitle = 'GitHub';
            icon = ['fab', 'github'];
          }

          return <SidebarSocialLink url={link} title={linkTitle} icon={icon} key={index} />;
        })}
      <SidebarSocialLink url="/feeds" title="Syndicated Feeds" icon="rss" />
    </nav>
  );
};

export default SidebarSocial;
