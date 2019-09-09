import React from 'react';

import PageLayout from '../components/pageLayout';
import Link from '../components/link';

const NotFoundPage: React.FunctionComponent = () => (
  <PageLayout title="404: Not found">
    <p>I recently migrated my blog to a new platform and may have broken a few links inadvertently!</p>
    {process.env.REPOSITORY_URL && (
      <p>
        If you don't mind, please <a href={`${process.env.REPOSITORY_URL}/issues/new?title=404%20Not%20Found&labels=bug`}>log an issue</a> with the URL you were trying to reach and where you found the URL. Thank you!
      </p>
    )}
    <p>
      In the meantime, you can <Link to="/">head back home</Link> to try finding it again.
    </p>
  </PageLayout>
);

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
