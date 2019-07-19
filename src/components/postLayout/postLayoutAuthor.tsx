import React from 'react';

import MdxRenderer from '../mdxRenderer';
import SiteContext from '../siteContext';

type PostLayoutAuthorProps = {};

const PostLayoutAuthor: React.FunctionComponent<PostLayoutAuthorProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      if (!siteMetadata) return null;

      const { author } = siteMetadata;

      return (
        <>
          {author && author.picture && author.name && (
            <section className="post-author">
              <img src={author.picture} className="author-thumbnail" alt={author.name} />
              <div className="author-biography">
                <h2>by {author.name}</h2>
                {author.biography && <MdxRenderer>{author.biography}</MdxRenderer>}
              </div>
            </section>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default PostLayoutAuthor;
