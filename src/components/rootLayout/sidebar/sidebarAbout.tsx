import React from 'react';

import Image from '../../image';
import Link from '../../link';
import SiteContext from '../../siteContext';

type SidebarAboutProps = {};

const SidebarAbout: React.FunctionComponent<SidebarAboutProps> = (props) => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { logo, title, description } = siteMetadata;

  return (
    <div className="sidebar-about">
      {logo && <Image className="sidebar-logo" alt={title} imageSharp={logo} />}
      <h1>
        <Link to="/" rel="home">
          {title}
        </Link>
      </h1>
      <p className="lead">{description}</p>
    </div>
  );
};

SidebarAbout.displayName = 'SidebarAbout';

export default SidebarAbout;
