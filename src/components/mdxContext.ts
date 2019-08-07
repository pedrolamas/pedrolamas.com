import React from 'react';

import { GraphQl, Utils } from '../utils';

type MdxContextProps = {
  mdx?: GraphQl.PostMdxFragment;
  meta: Utils.SafeMdxMetadata;
};

const MdxContext = React.createContext<MdxContextProps>({
  meta: {
    id: '',
    title: '(untitled)',
    url: '',
    dateFormatted: '',
  },
});

export default MdxContext;
