import React from 'react';

import Head from './head';
import RootLayout from './rootLayout';

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ title, children }) => (
  <RootLayout>
    <Head title={title} />
    <main role='main'>
      <article className='page'>
        <header className='page-header'>
          <h1 className='page-title'>{title}</h1>
        </header>

        <div className='page-content'>{children}</div>
      </article>
    </main>
  </RootLayout>
);

export default PageLayout;
