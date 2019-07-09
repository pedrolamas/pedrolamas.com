import React from 'react';

import MdxContext from '../../mdxContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = props => (
  <MdxContext.Consumer>
    {mdx => {
      if (!mdx) return null;

      const originalFile = mdx.file && mdx.file.base;

      return (
        <>
          {originalFile && process.env.REPOSITORY_URL && (
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
