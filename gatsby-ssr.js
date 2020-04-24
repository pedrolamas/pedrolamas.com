import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'typeface-pt-sans';

import RootLayout from './src/components/rootLayout';
import './src/styles/styles.scss';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const wrapPageElement = ({ element, props }) => {
  return <RootLayout {...props}>{element}</RootLayout>;
};
