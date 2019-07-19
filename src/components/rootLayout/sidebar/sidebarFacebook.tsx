import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';

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
              <FacebookProvider appId={facebook.app_id.toString()}>
                <Like href={`https://www.facebook.com/${facebook.publisher}`} width={320} layout="standard" action="like" size="small" showFaces={true} share={false} colorScheme="dark" />
              </FacebookProvider>
            </div>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default SidebarFacebook;
