import React from 'react';

import Image from '../image';
import MdxRenderer from '../mdxRenderer';
import SiteContext from '../siteContext';

type PostLayoutAuthorProps = {};

const PostLayoutAuthor: React.FunctionComponent<PostLayoutAuthorProps> = () => {
  const { siteMetadata } = React.useContext(SiteContext);

  if (!siteMetadata) return null;

  const { author, authorDetails } = siteMetadata;

  return (
    <section className="post-author">
      {authorDetails?.picture?.childImageSharp && <Image className="author-thumbnail" imageSharp={authorDetails.picture.childImageSharp} />}
      <div className="author-biography">
        <h2>by {author}</h2>
        {authorDetails?.biography && <MdxRenderer>{authorDetails.biography}</MdxRenderer>}
      </div>
    </section>
  );
};

PostLayoutAuthor.displayName = 'PostLayoutAuthor';

export default PostLayoutAuthor;
