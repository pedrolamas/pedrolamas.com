import React from 'react';
import Disqus from 'disqus-react';

import Link from '../../link';
import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';
import { Utils } from '../../../utils';

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
                <span className="comments">
                  <Disqus.CommentCount shortname={siteMetadata.disqus_shortname} config={disqusConfig}>
                    <Link to={`${url}#disqus_thread`}>Comments</Link>
                  </Disqus.CommentCount>
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
