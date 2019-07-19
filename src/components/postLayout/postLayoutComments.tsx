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

          const { siteUrl, disqusShortname } = siteMetadata;

          if (!disqusShortname) return null;

          const disqusConfig = {
            url: siteUrl ? path.join(siteUrl, url) : url,
            identifier: '',
            title,
          };

          return <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default PostLayoutComments;
