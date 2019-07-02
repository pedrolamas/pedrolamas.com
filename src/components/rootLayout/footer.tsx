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

      return (
        <>
          <footer className="content-footer" role="contentinfo">
            {siteMetadata.disclaimer && <MdxRenderer>{siteMetadata.disclaimer}</MdxRenderer>}
            <p>
              Site design based on <a href="https://github.com/poole/hyde">Hyde</a> under the <a href="https://github.com/poole/hyde/blob/master/LICENSE.md">MIT license</a>.
            </p>
          </footer>

          {siteMetadata.disqus_shortname && <script id="dsq-count-scr" src={`//${siteMetadata.disqus_shortname}.disqus.com/count.js`} async={true} />}

          {siteMetadata.addthis_profile && <script type="text/javascript" src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${siteMetadata.addthis_profile}`} async={true} />}

          {/* {% if site.addthis_profile and page.layout == "post" %}
            {% unless page.noshare %}
              <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid={{ site.addthis_profile }}" async></script>
            {% endunless %}
          {% endif %}
          <script src="{{ site.baseurl }}{% link js/reflow.js %}" async></script> */}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default Footer;
