import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faRss, faShareAlt, faCalendarAlt, faFolder, faTags, faComment, faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'typeface-pt-sans';

import RootLayout from './src/components/rootLayout';
import './src/styles/styles.scss';
import './node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export const wrapPageElement = ({ element, props }) => {
  config.autoAddCss = false;

  library.add(faInfo, faRss, faShareAlt, faCalendarAlt, faFolder, faTags, faComment, faEdit, faLink);
  library.add(faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faGithub);
  library.add(faEnvelope);

  return <RootLayout {...props}>{element}</RootLayout>;
};
