import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Content from './content';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
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
                fluid(maxWidth: 160) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            disclaimer {
              code {
                body
              }
            }
            authorDetails {
              email
              uri
              picture
              biography {
                code {
                  body
                }
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
                    fluid(maxWidth: 200, fit: CONTAIN) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            googleAnalytics
            disqusShortname
            addthisProfile
          }
        }
      }
    `
  );

  return (
    <SiteContext.Provider
      value={{
        siteMetadata: (site && site.siteMetadata) || undefined,
      }}
    >
      <Sidebar />

      <Content>
        <Header />

        {children}

        <Footer />
      </Content>
    </SiteContext.Provider>
  );
};

export default RootLayout;
