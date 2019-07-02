import React from 'react';

import PageLayout from './pageLayout';
import MdxProvider from './mdxProvider';
import * as Utils from '../utils';
import { Mdx } from '../generated/graphql';

type MdxPageLayoutProps = {
  pageContext: Mdx;
  children: React.ReactNode;
};

const MdxPageLayout: React.FunctionComponent<MdxPageLayoutProps> = ({ pageContext, children }) => {
  const { title } = Utils.SafeMetadataFromMdx(pageContext);

  return (
    <PageLayout title={title}>
      <MdxProvider>{children}</MdxProvider>
    </PageLayout>
  );
};

export default MdxPageLayout;
