import React from 'react';

import Image from '../../image';
import SiteContext from '../../siteContext';

type SidebarLogosProps = {
  children?: never;
};

const SidebarLogos: React.FunctionComponent<SidebarLogosProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { sidebar } = siteMetadata;

  return <>{sidebar?.logos && <div className="sidebar-logos">{sidebar.logos.map((logo, index) => logo?.image && <Image className="sidebar-logos-logo" title={logo.title || undefined} alt={logo.title || 'logo'} imageSharp={logo.image} key={index} />)}</div>}</>;
};

SidebarLogos.displayName = 'SidebarLogos';

export default SidebarLogos;
