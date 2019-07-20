import React from 'react';
import Disqus from 'disqus-react';
import Url from 'url';

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

          const { siteUrl, disqusShortname } = siteMetadata;

          if (!disqusShortname) return null;

          const disqusConfig = {
            url: siteUrl ? Url.resolve(siteUrl, url) : url,
            identifier: '',
            title,
          };

          return (
            <span className="comments">
              <Link to={`${url}#disqus_thread`}>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
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
