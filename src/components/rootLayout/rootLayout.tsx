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
            logoFixed500: logo {
              childImageSharp {
                resize(width: 500) {
                  src
                }
              }
            }
            disclaimer {
              body
            }
            authorDetails {
              email
              uri
              picture {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
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

  const siteMetadata = site && site.siteMetadata;

  if (!siteMetadata) throw Error('Site Metadata expected');

  const siteContext = {
    siteMetadata,
  };

  return (
    <SiteContext.Provider value={siteContext}>
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
