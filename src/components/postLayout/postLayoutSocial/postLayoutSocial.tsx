import React from 'react';
import { Location } from '@reach/router';
import Url from 'url';

import PostLayoutSocialItem from './postLayoutSocialItem';
import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';

type PostLayoutSocialProps = {};

const PostLayoutSocial: React.FunctionComponent<PostLayoutSocialProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);
  const { meta } = React.useContext(MdxContext);

  if (!siteMetadata) return null;

  const { siteUrl } = siteMetadata;

  return (
    <section className="post-social">
      <Location>
        {locationContext => {
          const pageUrl = encodeURIComponent(Url.resolve(siteUrl, locationContext.location.pathname));
          const pageTitle = encodeURIComponent(meta.title);

          return (
            <>
              <PostLayoutSocialItem name="Facebook" icon={['fab', 'facebook-f']} link={`https://facebook.com/sharer/sharer.php?u=${pageUrl}`} label="Share on Facebook" />
              <PostLayoutSocialItem name="Twitter" icon={['fab', 'twitter']} link={`https://twitter.com/intent/tweet/?text=${pageTitle}&url=${pageUrl}`} label="Share on Twitter" />
              <PostLayoutSocialItem name="LinkedIn" icon={['fab', 'linkedin-in']} link={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageTitle}&source=${pageUrl}`} label="Share on LinkedIn" />
              <PostLayoutSocialItem name="WhatsApp" icon={['fab', 'whatsapp']} link={`whatsapp://send?text=${pageTitle}%20${pageUrl}`} label="Share on WhatsApp" />
              <PostLayoutSocialItem name="E-Mail" icon={['far', 'envelope']} link={`mailto:?subject=${pageTitle}&body=${pageUrl}`} label="Share by E-Mail" />
            </>
          );
        }}
      </Location>
    </section>
  );
};

export default PostLayoutSocial;
