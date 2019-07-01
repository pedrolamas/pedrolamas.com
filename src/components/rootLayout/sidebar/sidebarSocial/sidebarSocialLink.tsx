import React from 'react';

import Link from '../../../link';

type SidebarSocialLinkProps = {
  url: string;
  title: string;
};

const SidebarSocialLink: React.FunctionComponent<SidebarSocialLinkProps> = ({ url, title }) => (
  <Link to={url} className='sidebar-social-item' title={title}>
    <span className='screen-reader-text'>{title}</span>
  </Link>
);

export default SidebarSocialLink;
