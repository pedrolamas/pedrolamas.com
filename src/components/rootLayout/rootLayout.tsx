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
            disclaimer {
              code {
                body
              }
            }
            disqusShortname
            googleAnalytics
            lang
            logo {
              childImageSharp {
                fluid(maxWidth: 160) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            addthisProfile
            author
            authorDetails {
              biography {
                code {
                  body
                }
              }
              email
              picture
              twitter
              uri
            }
            facebook {
              admins
              appId
              publisher
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
            social {
              links
            }
            twitter {
              username
            }
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
