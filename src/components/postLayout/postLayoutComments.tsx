import React from 'react';
import Disqus from 'disqus-react';
import Url from 'url';

import SiteContext from '../siteContext';
import MdxContext from '../mdxContext';

type PostLayoutCommentsProps = {};

const PostLayoutComments: React.FunctionComponent<PostLayoutCommentsProps> = () => {
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

  return <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

PostLayoutComments.displayName = 'PostLayoutComments';

export default PostLayoutComments;
