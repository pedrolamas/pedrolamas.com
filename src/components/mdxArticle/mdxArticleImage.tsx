import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import MdxContext from '../mdxContext';

type FluidObjectWithPresentationWidth = FluidObject & {
  presentationWidth: number;
};

type MdxArticleImageProps = {
  children?: never;
};

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const fluidObject = frontmatter && frontmatter.image && frontmatter.image.childImageSharp && (frontmatter.image.childImageSharp.fluid as FluidObjectWithPresentationWidth);

      if (!fluidObject) return null;

      const style = fluidObject.presentationWidth ? { maxWidth: fluidObject.presentationWidth } : undefined;

      return (
        <div className="post-thumbnail">
          <Img className="sidebar-logo" fluid={fluidObject} style={style} />
        </div>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleImage;
