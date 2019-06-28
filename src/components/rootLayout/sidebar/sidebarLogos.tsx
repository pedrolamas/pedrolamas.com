import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import SiteContext from '../../siteContext';

type SidebarLogosProps = {
  children?: never;
}

const SidebarLogos: React.FunctionComponent<SidebarLogosProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      return (
        <>
          {siteMetadata.sidebar && siteMetadata.sidebar.logos && (
            <div className="sidebar-logos">
              {siteMetadata.sidebar.logos.map((logo, index) => logo && logo.image && logo.image.childImageSharp
                ? <Img className="sidebar-logos-logo" title={logo.title || undefined} alt={logo.title || undefined} fluid={logo.image.childImageSharp.fluid as FluidObject} key={index} />
                : null)
              }
            </div>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default SidebarLogos;
