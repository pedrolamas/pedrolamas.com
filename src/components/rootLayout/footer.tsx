import React from 'react';

import SiteContext from '../siteContext';
import MdxRenderer from '../mdxRenderer';

type FooterProps = {
  children?: never;
};

const Footer: React.FunctionComponent<FooterProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { disclaimer } = siteMetadata;

  return (
    <>
      <footer className="content-footer" role="contentinfo">
        {disclaimer && <MdxRenderer>{disclaimer}</MdxRenderer>}
        <p>
          Site design based on <a href="https://github.com/poole/hyde">Hyde</a> under the <a href="https://github.com/poole/hyde/blob/master/LICENSE.md">MIT license</a>.
        </p>
      </footer>
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
