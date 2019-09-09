import React from 'react';
import Disqus from 'disqus-react';
import Url from 'url';

import Link from '../../link';
import FontAwesomeSymbol from '../../fontAwesomeSymbol';
import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';

type MdxArticleMetaCommentsProps = {
  children?: never;
};

const MdxArticleMetaComments: React.FunctionComponent<MdxArticleMetaCommentsProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);
  const { meta } = React.useContext(MdxContext);

  if (!siteMetadata) return null;

  const { siteUrl, disqusShortname } = siteMetadata;
  const { title, url } = meta;

  if (!disqusShortname) return null;

  const disqusConfig = {
    url: Url.resolve(siteUrl, url),
    identifier: '',
    title,
  };

  return (
    <span className="comments">
      <FontAwesomeSymbol symbolName="article-comments" />

      <Link to={`${url}#disqus_thread`}>
        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          Comments
        </Disqus.CommentCount>
      </Link>
    </span>
  );
};

MdxArticleMetaComments.displayName = 'MdxArticleMetaComments';

export default MdxArticleMetaComments;
