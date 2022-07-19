import React from 'react';

import { Utils } from '../utils';

type MdxContextProps = {
  mdx?: Queries.PostMdxFragment;
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
