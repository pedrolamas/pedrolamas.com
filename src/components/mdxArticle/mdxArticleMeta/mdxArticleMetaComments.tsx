import React from 'react';
import Disqus from 'disqus-react';

import SiteContext from '../../siteContext';
import MdxArticleContext from '../mdxArticleContext';

type MdxArticleMetaCommentsProps = {
  children?: never;
};

const MdxArticleMetaComments: React.FunctionComponent<MdxArticleMetaCommentsProps> = () => (
  <SiteContext.Consumer>
    {siteContext => (
      <MdxArticleContext.Consumer>
        {mdx => {
          const { siteMetadata } = siteContext;

          if (!mdx) return null;

          const { fields } = mdx;

          const disqusConfig = {
            url: (fields && fields.slug) || '',
            identifier: '',
            title: '',
          };

          return (
            <>
              {siteMetadata && siteMetadata.disqus_shortname && (
                <Disqus.CommentCount shortname={siteMetadata.disqus_shortname} config={disqusConfig}>
                  <a href='#disqus_thread'>Comments</a>
                </Disqus.CommentCount>
              )}
            </>
          );
        }}
      </MdxArticleContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default MdxArticleMetaComments;
