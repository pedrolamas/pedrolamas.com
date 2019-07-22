import React from 'react';

import Image from '../image';
import MdxContext from '../mdxContext';

type MdxArticleImageProps = {
  children?: never;
};

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => (
  <MdxContext.Consumer>
    {mdxContext => {
      const { image } = mdxContext.meta;

      return (
        <>
          {image && image.childImageSharp && (
            <div className="post-thumbnail">
              <Image className="sidebar-logo" imageSharp={image.childImageSharp} />
            </div>
          )}
        </>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleImage;
