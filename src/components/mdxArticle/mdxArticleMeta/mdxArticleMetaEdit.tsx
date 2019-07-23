import React from 'react';

import MdxContext from '../../mdxContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = props => (
  <MdxContext.Consumer>
    {mdxContext => {
      const { originalFile } = mdxContext.meta;

      return (
        <>
          {originalFile && process.env.REPOSITORY_URL && process.env.BRANCH && (
            <span className="edit">
              <a href={`${process.env.REPOSITORY_URL}/edit/${process.env.BRANCH || 'master'}/content/posts/${originalFile}`}>Edit</a>
            </span>
          )}
        </>
      );
    }}
  </MdxContext.Consumer>
);

export default MdxArticleMetaEdit;
