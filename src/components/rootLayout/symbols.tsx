import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FontAwesome } from '../../utils';

type SymbolsProps = {};

const Symbols: React.FunctionComponent<SymbolsProps> = () => (
  <>
    {Object.entries(FontAwesome.Symbols).map(([symbolName, icon], index) => (
      <FontAwesomeIcon icon={icon} symbol={symbolName} key={index} />
    ))}
  </>
);

Symbols.displayName = 'Symbols';

export default Symbols;
