import React from 'react';
import Disqus from 'disqus-react';

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

          const disqusConfig = {
            url,
            identifier: '',
            title,
          };

          return (
            <>
              {siteMetadata && siteMetadata.disqus_shortname && (
                <span className="comments">
                  <Link to={`${url}#disqus_thread`}>
                    <Disqus.CommentCount shortname={siteMetadata.disqus_shortname} config={disqusConfig}>
                      Comments
                    </Disqus.CommentCount>
                  </Link>
                </span>
              )}
            </>
          );
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default MdxArticleMetaComments;
