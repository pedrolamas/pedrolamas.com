import React from 'react';

import MdxContext from '../../mdxContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = props => {
  const { meta } = React.useContext(MdxContext);

  const { originalFile } = meta;

  return (
    <>
      {originalFile && process.env.REPOSITORY_URL && process.env.BRANCH && (
        <span className="edit">
          <a href={`${process.env.REPOSITORY_URL}/edit/${process.env.BRANCH || 'master'}/content/posts/${originalFile}`}>Edit</a>
        </span>
      )}
    </>
  );
};

export default MdxArticleMetaEdit;
