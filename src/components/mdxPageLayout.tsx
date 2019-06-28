import React from 'react';

import PageLayout from './pageLayout';
import MdxProvider from './mdxProvider';
import { Mdx } from '../generated/graphql';

type MdxLPageLayoutProps = {
  pageContext: Mdx;
  children: React.ReactNode;
}

const MdxPageLayout: React.FunctionComponent<MdxLPageLayoutProps> = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;

  return (
    <PageLayout title={(frontmatter && frontmatter.title) || undefined}>
      <MdxProvider children={children} />
    </PageLayout>
  )
};

export default MdxPageLayout;
