import React from 'react';

import SiteContext from '../siteContext';

type HeaderProps = {
  children?: never;
};

const Header: React.FunctionComponent<HeaderProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      return (
        <>
          {siteMetadata.facebook && siteMetadata.facebook.app_id && (
            <>
              <div id="fb-root"></div>
              <script src="js/fb.js" async></script>
            </>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default Header;
