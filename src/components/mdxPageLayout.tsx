import React from 'react';

import PageLayout from './pageLayout';
import MdxProvider from './mdxProvider';
import { Mdx } from '../generated/graphql';

type MdxPageLayoutProps = {
  pageContext: Mdx;
  children: React.ReactNode;
};

const MdxPageLayout: React.FunctionComponent<MdxPageLayoutProps> = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;

  const title = (frontmatter && frontmatter.title) || '(untitled)';

  return (
    <PageLayout title={title}>
      <MdxProvider>{children}</MdxProvider>
    </PageLayout>
  );
};

export default MdxPageLayout;
