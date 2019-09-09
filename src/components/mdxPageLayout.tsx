import React from 'react';

import PageLayout from './pageLayout';
import MdxProvider from './mdxProvider';
import { Utils, GraphQl } from '../utils';

type MdxPageLayoutProps = {
  pageContext: GraphQl.Mdx;
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

MdxPageLayout.displayName = 'MdxPageLayout';

export default MdxPageLayout;
