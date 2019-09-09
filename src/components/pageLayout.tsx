import React from 'react';

import Head from './head';

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ title, children }) => (
  <>
    <Head type="page" title={title} />

    <main role="main" id="main">
      <article className="page">
        <header className="page-header">
          <h1 className="page-title">{title}</h1>
        </header>

        <div className="page-content">{children}</div>
      </article>
    </main>
  </>
);

PageLayout.displayName = 'PageLayout';

export default PageLayout;
