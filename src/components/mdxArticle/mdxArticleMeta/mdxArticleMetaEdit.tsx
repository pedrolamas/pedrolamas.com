import React from 'react';

import FontAwesomeSymbol from '../../fontAwesomeSymbol';
import MdxContext from '../../mdxContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = () => {
  const { meta } = React.useContext(MdxContext);

  const { originalFile } = meta;

  return (
    <>
      {originalFile && process.env.REPOSITORY_URL && process.env.BRANCH && (
        <span className="edit">
          <FontAwesomeSymbol symbolName="article-edit" />

          <a href={`${process.env.REPOSITORY_URL}/edit/${process.env.BRANCH || 'master'}/content/posts/${originalFile}`}>Edit</a>
        </span>
      )}
    </>
  );
};

MdxArticleMetaEdit.displayName = 'MdxArticleMetaEdit';

export default MdxArticleMetaEdit;
