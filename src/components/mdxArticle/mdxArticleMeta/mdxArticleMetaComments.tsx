import React from 'react';
import Disqus from 'disqus-react';
import path from 'path';

import Link from '../../link';
import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';

type MdxArticleMetaCommentsProps = {
  children?: never;
};

const MdxArticleMetaComments: React.FunctionComponent<MdxArticleMetaCommentsProps> = () => (
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

          return (
            <span className="comments">
              <Link to={`${url}#disqus_thread`}>
                <Disqus.CommentCount shortname={disqus.shortname} config={disqusConfig}>
                  Comments
                </Disqus.CommentCount>
              </Link>
            </span>
          );
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default MdxArticleMetaComments;
