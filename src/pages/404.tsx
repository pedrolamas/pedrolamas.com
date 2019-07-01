import React from 'react';

import PageLayout from '../components/pageLayout';
import Link from '../components/link';
import SiteContext from '../components/siteContext';

const NotFoundPage: React.FunctionComponent = () => (
  <SiteContext.Consumer>
    {siteContext => (
      <PageLayout title='404: Not found'>
        <p>I recently migrated my blog to a new platform and may have broken a few links inadvertently!</p>
        {siteContext.siteMetadata && siteContext.siteMetadata.github && siteContext.siteMetadata.github.repository_url && (
          <p>
            If you don't mind, please <Link to={`${siteContext.siteMetadata.github.repository_url}/issues/new?title=404%20Not%20Found&labels=bug`}>log an issue</Link> with the URL you were trying to reach and where you found the URL. Thank you!
          </p>
        )}
        <p>
          In the meantime, you can <Link to='/'>head back home</Link> to try finding it again.
        </p>
      </PageLayout>
    )}
  </SiteContext.Consumer>
);

export default NotFoundPage;
