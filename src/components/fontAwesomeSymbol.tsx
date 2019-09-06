import React from 'react';
import { IconPrefix, IconName, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

type FontAwesomeSymbolProps = {
  prefix?: IconPrefix;
  iconName: IconName;
  symbolName: string;
};

const FontAwesomeSymbol: React.FunctionComponent<FontAwesomeSymbolProps> = ({ prefix, iconName, symbolName }) => {
  const iconDefinition = findIconDefinition({
    iconName,
    prefix: prefix || 'fas',
  });

  const [width, height] = iconDefinition.icon;

  const widthClass = `fa-w-${Math.ceil((width / height) * 16)}`;

  return (
    <svg className={`svg-inline--fa ${widthClass}`}>
      <use xlinkHref={`#${symbolName}`}></use>
    </svg>
  );
};

FontAwesomeSymbol.defaultProps = {
  prefix: 'fas',
};

export default FontAwesomeSymbol;
