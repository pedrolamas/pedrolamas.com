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

      const { logo, title, description } = siteMetadata;

      return (
        <div className="sidebar-about">
          {logo && logo.childImageSharp && <Img className="sidebar-logo" fluid={logo.childImageSharp.fluid as FluidObject} />}
          <h1>
            <Link to="/" rel="home">
              {title}
            </Link>
          </h1>
          <p className="lead">{description}</p>
        </div>
      );
    }}
  </SiteContext.Consumer>
);

export default SidebarAbout;
