import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import MdxArticleContext from './mdxArticleContext';

type MdxArticleImageProps = {
  children?: never;
}

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => (
  <MdxArticleContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const image = frontmatter && frontmatter.image;

      return (
        <>
          {image && image.childImageSharp &&
            <div className="post-thumbnail">
              <Img className="sidebar-logo" fluid={image.childImageSharp.fluid as FluidObject} />
            </div>
          }
        </>
      );
    }}
  </MdxArticleContext.Consumer>
)



export default MdxArticleImage;
