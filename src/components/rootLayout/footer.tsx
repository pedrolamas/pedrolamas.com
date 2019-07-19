import React from 'react';

import SiteContext from '../siteContext';
import MdxRenderer from '../mdxRenderer';

type FooterProps = {
  children?: never;
};

const Footer: React.FunctionComponent<FooterProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      const { disclaimer, addthis_profile: addthisProfile } = siteMetadata;

      return (
        <>
          <footer className="content-footer" role="contentinfo">
            {disclaimer && <MdxRenderer>{disclaimer}</MdxRenderer>}
            <p>
              Site design based on <a href="https://github.com/poole/hyde">Hyde</a> under the <a href="https://github.com/poole/hyde/blob/master/LICENSE.md">MIT license</a>.
            </p>
          </footer>

          {addthisProfile && <script type="text/javascript" src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${addthisProfile}`} async={true} />}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default Footer;
