import React from 'react';

import MdxRenderer from '../mdxRenderer';
import SiteContext from '../siteContext';

type PostLayoutAuthorProps = {};

const PostLayoutAuthor: React.FunctionComponent<PostLayoutAuthorProps> = () => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      const author = siteMetadata && siteMetadata.author;

      return (
        <>
          {author && author.picture && author.name && (
            <section className="post-author">
              <img src={author.picture} className="author-thumbnail" alt={author.name} />
              <div className="author-biography">
                <h2>by {author.name}</h2>
                <p>{author.biography && <MdxRenderer>{author.biography}</MdxRenderer>}</p>
              </div>
            </section>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default PostLayoutAuthor;
