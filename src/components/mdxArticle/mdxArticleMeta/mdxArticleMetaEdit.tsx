import React from 'react';

import SiteContext from '../../siteContext';
import MdxContext from '../../mdxContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = props => (
  <SiteContext.Consumer>
    {siteContext => (
      <MdxContext.Consumer>
        {mdx => {
          const { siteMetadata } = siteContext;

          if (!mdx) return null;

          const originalFile = mdx.file && mdx.file.base;

          return (
            <>
              {siteMetadata && siteMetadata.github && siteMetadata.github.repository_url && (
                <span className="edit">
                  <a href={`${siteMetadata.github.repository_url}/edit/master/content/posts/${originalFile}`}>Edit</a>
                </span>
              )}
            </>
          );
        }}
      </MdxContext.Consumer>
    )}
  </SiteContext.Consumer>
);

export default MdxArticleMetaEdit;
