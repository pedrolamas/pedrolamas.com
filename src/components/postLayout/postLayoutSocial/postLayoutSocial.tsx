import React from 'react';
import { useLocation } from '@reach/router';
import Url from 'url';

import PostLayoutSocialLink from './postLayoutSocialLink';
import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';

type PostLayoutSocialProps = {};

const PostLayoutSocial: React.FunctionComponent<PostLayoutSocialProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);
  const { meta } = React.useContext(MdxContext);
  const location = useLocation();

  if (!siteMetadata) return null;

  const { siteUrl } = siteMetadata;

  const pageUrl = encodeURIComponent(Url.resolve(siteUrl, location.pathname));
  const pageTitle = encodeURIComponent(meta.title);

  return (
    <section className="post-social">
      <PostLayoutSocialLink name="Facebook" symbolName="share-facebook" link={`https://facebook.com/sharer/sharer.php?u=${pageUrl}`} label="Share on Facebook" />
      <PostLayoutSocialLink name="Twitter" symbolName="share-twitter" link={`https://twitter.com/intent/tweet/?text=${pageTitle}&url=${pageUrl}`} label="Share on Twitter" />
      <PostLayoutSocialLink name="LinkedIn" symbolName="share-linkedin" link={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageTitle}&source=${pageUrl}`} label="Share on LinkedIn" />
      <PostLayoutSocialLink name="WhatsApp" symbolName="share-whatsapp" link={`whatsapp://send?text=${pageTitle}%20${pageUrl}`} label="Share on WhatsApp" />
      <PostLayoutSocialLink name="E-Mail" symbolName="share-email" link={`mailto:?subject=${pageTitle}&body=${pageUrl}`} label="Share by E-Mail" />
    </section>
  );
};

PostLayoutSocial.displayName = 'PostLayoutSocial';

export default PostLayoutSocial;
