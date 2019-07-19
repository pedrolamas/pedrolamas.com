import React from 'react';
import Disqus from 'disqus-react';
import path from 'path';

import SiteContext from '../siteContext';
import MdxContext from '../mdxContext';

type PostLayoutCommentsProps = {};

const PostLayoutComments: React.FunctionComponent<PostLayoutCommentsProps> = () => (
  <SiteContext.Consumer>
    {siteContext => (
      <MdxContext.Consumer>
        {mdxContext => {
          const { siteMetadata } = siteContext;
          const { title, url } = mdxContext.meta;

          if (!siteMetadata) return null;

          const { disqus } = siteMetadata;

          if (!disqus || !disqus.shortname) return null;

          const disqusConfig = {
            url: disqus.website_url ? path.join(disqus.website_url, url) : url,
            identifier: '',
            title,
          };

          return <Disqus.DiscussionEmbed shortname={disqus.shortname} config={disqusConfig} />;
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default PostLayoutComments;
