import React from 'react';

import Image from '../../image';
import SiteContext from '../../siteContext';

type SidebarLogosProps = {
  children?: never;
};

const SidebarLogos: React.FunctionComponent<SidebarLogosProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      const { sidebar } = siteMetadata;

      return <>{sidebar && sidebar.logos && <div className="sidebar-logos">{sidebar.logos.map((logo, index) => logo && logo.image && logo.image.childImageSharp && <Image className="sidebar-logos-logo" title={logo.title || undefined} alt={logo.title || undefined} imageSharp={logo.image.childImageSharp} key={index} />)}</div>}</>;
    }}
  </SiteContext.Consumer>
);

export default SidebarLogos;
