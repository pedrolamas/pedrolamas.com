import React from 'react';
import Disqus from 'disqus-react';
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

          const disqusConfig = {
            url,
            identifier: '',
            title,
          };

          return <>{siteMetadata && siteMetadata.disqus_shortname && <Disqus.DiscussionEmbed shortname={siteMetadata.disqus_shortname} config={disqusConfig} />}</>;
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default PostLayoutComments;
