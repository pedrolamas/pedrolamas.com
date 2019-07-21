import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

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
          {authorDetails && authorDetails.picture && authorDetails.picture.childImageSharp && <Img className="author-thumbnail" fluid={authorDetails.picture.childImageSharp.fluid as FluidObject} />}
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
