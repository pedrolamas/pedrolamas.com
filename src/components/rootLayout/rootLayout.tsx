import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Content from './content';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
import SiteContext from '../siteContext';
import { RootLayoutQuery } from '../../generated/graphql';

type RootLayoutProperties = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<RootLayoutProperties> = ({ children }) => {
  const { dataYaml } = useStaticQuery<RootLayoutQuery>(
    graphql`
      query RootLayout {
        dataYaml {
          title
          description
          disclaimer {
            code {
              body
            }
          }
          disqus_shortname
          google_analytics
          lang
          logo {
            childImageSharp {
              fluid(maxWidth: 160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          addthis_profile
          author {
            biography {
              code {
                body
              }
            }
            email
            name
            picture
            twitter
            uri
          }
          facebook {
            admins
            app_id
            publisher
          }
          github {
            username
            repository_url
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
            name
          }
          twitter {
            username
          }
        }
      }
    `
  );

  return (
    <SiteContext.Provider
      value={{
        siteMetadata: dataYaml || undefined,
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
