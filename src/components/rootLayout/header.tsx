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

      const { facebook } = siteMetadata;

      return (
        <>
          {facebook && facebook.app_id && (
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
