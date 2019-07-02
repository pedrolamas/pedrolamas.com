import React from 'react';
import Disqus from 'disqus-react';

import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';
import * as Utils from '../../../utils';

type MdxArticleMetaCommentsProps = {
  children?: never;
};

const MdxArticleMetaComments: React.FunctionComponent<MdxArticleMetaCommentsProps> = () => (
  <SiteContext.Consumer>
    {siteContext => (
      <MdxContext.Consumer>
        {mdx => {
          const { siteMetadata } = siteContext;

          if (!mdx) return null;

          const { url } = Utils.SafeMetadataFromMdx(mdx);

          const disqusConfig = {
            url: url,
            identifier: '',
            title: '',
          };

          return (
            <>
              {siteMetadata && siteMetadata.disqus_shortname && (
                <Disqus.CommentCount shortname={siteMetadata.disqus_shortname} config={disqusConfig}>
                  <a href="#disqus_thread">Comments</a>
                </Disqus.CommentCount>
              )}
            </>
          );
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default MdxArticleMetaComments;
