import React from 'react';

import { PostMdxFragment } from '../generated/graphql';

const MdxContext = React.createContext<PostMdxFragment | undefined>(undefined);

export default MdxContext;
