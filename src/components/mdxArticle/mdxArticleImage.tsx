import React from 'react';

import Image from '../image';
import MdxContext from '../mdxContext';

type MdxArticleImageProps = {
  children?: never;
};

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { image } = meta;

  return (
    <>
      {image?.childImageSharp && (
        <div className="post-thumbnail">
          <Image className="sidebar-logo" imageSharp={image.childImageSharp} />
        </div>
      )}
    </>
  );
};

MdxArticleImage.displayName = 'MdxArticleImage';

export default MdxArticleImage;
