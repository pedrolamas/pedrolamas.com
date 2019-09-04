import React from 'react';
import 'typeface-pt-sans';

import RootLayout from './src/components/rootLayout';
import './src/styles/styles.scss';

export const wrapPageElement = ({ element, props }) => <RootLayout {...props}>{element}</RootLayout>;
