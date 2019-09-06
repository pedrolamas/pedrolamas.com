import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MdxArticleSymbolDefinitions } from './mdxArticleSymbolDefinitions';

type MdxArticleSymbolsProps = {};

const MdxArticleSymbols: React.FunctionComponent<MdxArticleSymbolsProps> = () => (
  <>
    {Object.entries(MdxArticleSymbolDefinitions).map(([symbol, icon], index) => (
      <FontAwesomeIcon icon={icon} symbol={symbol} key={index} />
    ))}
  </>
);

export default MdxArticleSymbols;
