import React from 'react';

import SiteContext from '../../siteContext';

type SidebarFacebookProps = {
  children?: never;
};

const SidebarFacebook: React.FunctionComponent<SidebarFacebookProps> = props => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      const { facebook } = siteMetadata;

      return (
        <>
          {facebook && facebook.app_id && facebook.publisher && (
            <div className="sidebar-facebook">
              <div className="fb-like" data-href={`https://www.facebook.com/${facebook.publisher}`} data-width="320" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="false" data-colorscheme="dark" />
            </div>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default SidebarFacebook;
