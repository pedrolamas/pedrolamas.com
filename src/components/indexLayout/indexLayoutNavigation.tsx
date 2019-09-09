import React from 'react';

import Link from '../link';

type IndexLayoutNavigationProps = {
  previousPageIndex?: number;
  nextPageIndex?: number;
};

const IndexLayoutNavigation: React.FunctionComponent<IndexLayoutNavigationProps> = ({ nextPageIndex, previousPageIndex }) => (
  <nav className="pagination">
    {nextPageIndex ? (
      <Link className="pagination-item older" to={`/page/${nextPageIndex}/`}>
        Older
      </Link>
    ) : (
      <span className="pagination-item older">Older</span>
    )}
    {previousPageIndex ? (
      <Link className="pagination-item newer" to={previousPageIndex === 1 ? '/' : `/page/${previousPageIndex}/`}>
        Newer
      </Link>
    ) : (
      <span className="pagination-item newer">Newer</span>
    )}
  </nav>
);

IndexLayoutNavigation.displayName = 'IndexLayoutNavigation';

export default IndexLayoutNavigation;
