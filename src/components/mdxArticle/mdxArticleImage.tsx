import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import MdxContext from '../mdxContext';

type MdxArticleImageProps = {
  children?: never;
};

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const { frontmatter } = mdx;

      const fluid = frontmatter && frontmatter.image && frontmatter.image.childImageSharp && frontmatter.image.childImageSharp.fluid;

      if (!fluid) return null;

      const style = fluid.presentationWidth ? { maxWidth: fluid.presentationWidth } : undefined;

      return (
        <div className="post-thumbnail">
          <Img className="sidebar-logo" fluid={fluid as FluidObject} style={style} />
        </div>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleImage;
