import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import Link from '../../link';
import SiteContext from '../../siteContext';

type SidebarAboutProps = {};

const SidebarAbout: React.FunctionComponent<SidebarAboutProps> = props => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      return (
        <div className="sidebar-about">
          {siteMetadata.logo && siteMetadata.logo.childImageSharp && <Img className="sidebar-logo" fluid={siteMetadata.logo.childImageSharp.fluid as FluidObject} />}
          <h1>
            <Link to="/" rel="home">
              {siteMetadata.title}
            </Link>
          </h1>
          <p className="lead">{siteMetadata.description}</p>
        </div>
      );
    }}
  </SiteContext.Consumer>
);

export default SidebarAbout;
