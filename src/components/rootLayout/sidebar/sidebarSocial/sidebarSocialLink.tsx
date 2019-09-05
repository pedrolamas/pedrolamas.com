import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Link from '../../../link';

type SidebarSocialLinkProps = {
  url: string;
  title: string;
  icon: IconProp;
};

const SidebarSocialLink: React.FunctionComponent<SidebarSocialLinkProps> = ({ url, title, icon }) => (
  <Link to={url} className="sidebar-social-item" title={title}>
    <FontAwesomeIcon icon={icon} />
    <span className="screen-reader-text">{title}</span>
  </Link>
);

export default SidebarSocialLink;
