import React from 'react';

import Image from '../image';
import MdxContext from '../mdxContext';

type MdxArticleImageProps = {
  children?: never;
};

const MdxArticleImage: React.FunctionComponent<MdxArticleImageProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { title, image } = meta;

  return (
    <>
      {image && (
        <div className="post-thumbnail">
          <Image className="sidebar-logo" alt={title} imageSharp={image} />
        </div>
      )}
    </>
  );
};

MdxArticleImage.displayName = 'MdxArticleImage';

export default MdxArticleImage;
