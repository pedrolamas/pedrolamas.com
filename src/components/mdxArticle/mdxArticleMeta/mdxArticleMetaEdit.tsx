import React from 'react';
import SiteContext from '../../siteContext';

type MdxArticleMetaEditProps = {};

const MdxArticleMetaEdit: React.FunctionComponent<MdxArticleMetaEditProps> = props => (
  <SiteContext.Consumer>
    {siteContext => {
      const { siteMetadata } = siteContext;

      return (
        <>
          {siteMetadata && siteMetadata.github && siteMetadata.github.repository_url && (
            <span className="edit">
              <a href={`${siteMetadata.github.repository_url}/edit/master/this_article`}>Edit</a>
            </span>
          )}
        </>
      );
    }}
  </SiteContext.Consumer>
);

export default MdxArticleMetaEdit;
