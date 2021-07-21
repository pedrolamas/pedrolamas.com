import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Content from './content';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
import Symbols from './symbols';
import SiteContext from '../siteContext';
import { GraphQl } from '../../utils';

type RootLayoutProperties = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<RootLayoutProperties> = ({ children }) => {
  const { site } = useStaticQuery<GraphQl.RootLayoutQuery>(
    graphql`
      query RootLayout {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            logo {
              childImageSharp {
                gatsbyImageData(width: 160, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
              publicURL
            }
            disclaimer {
              body
            }
            authorDetails {
              email
              uri
              picture {
                childImageSharp {
                  gatsbyImageData(width: 80, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
                publicURL
              }
              biography {
                body
              }
              twitter
            }
            twitter {
              username
            }
            facebook {
              appId
              publisher
              admins
            }
            social {
              links
            }
            sidebar {
              logos {
                title
                image {
                  childImageSharp {
                    gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                  }
                }
              }
            }
            googleGtag
            disqusShortname
          }
        }
      }
    `
  );

  const siteMetadata = site && site.siteMetadata;

  if (!siteMetadata) throw Error('Site Metadata expected');

  const siteContext = {
    siteMetadata,
  };

  return (
    <SiteContext.Provider value={siteContext}>
      <Symbols />

      <Sidebar />

      <Content>
        <Header />

        {children}

        <Footer />
      </Content>
    </SiteContext.Provider>
  );
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
