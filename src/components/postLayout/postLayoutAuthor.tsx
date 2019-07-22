import React from 'react';

import Image from '../image';
import MdxRenderer from '../mdxRenderer';
import SiteContext from '../siteContext';

type PostLayoutAuthorProps = {};

const PostLayoutAuthor: React.FunctionComponent<PostLayoutAuthorProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      const { author, authorDetails } = siteMetadata;

      return (
        <section className="post-author">
          {authorDetails && authorDetails.picture && authorDetails.picture.childImageSharp && <Image className="author-thumbnail" imageSharp={authorDetails.picture.childImageSharp} />}
          <div className="author-biography">
            <h2>by {author}</h2>
            {authorDetails && authorDetails.biography && <MdxRenderer>{authorDetails.biography}</MdxRenderer>}
          </div>
        </section>
      );
    }}
  </SiteContext.Consumer>
);

export default PostLayoutAuthor;
