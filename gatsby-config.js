const url = require('url');
const path = require('path');

const siteMetadata = require('./gatsby-site-metadata');
const siteAcronyms = require('./gatsby-site-acronyms');

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['REPOSITORY_URL', 'BRANCH'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `content/assets/logo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/components/mdxPageLayout.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./plugins/gatsby-remark-fix-urls`),
          },
          {
            resolve: `gatsby-remark-acronyms`,
            options: {
              acronyms: siteAcronyms,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              showCaptions: [`title`],
              wrapperStyle: (fluidResult) => `margin-left: auto; margin-right: auto; max-width: ${fluidResult.presentationWidth}px;`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-smartypants`,
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-feed-generator`,
      options: {
        generator: `GatsbyJS`,
        rss: true,
        json: true,
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            name: `feed`,
            query: `
              {
                allMdx(filter: { fields: { slug: { ne: null } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
                  edges {
                    node {
                      html
                      frontmatter {
                        date
                        title
                        image {
                          publicURL
                        }
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({ query: { site, allMdx } }) => {
              const siteUrl = site.siteMetadata.siteUrl;

              return allMdx.edges.map((edge) => {
                const { html, frontmatter, fields } = edge.node;

                const title = frontmatter && frontmatter.title;
                const date = frontmatter && frontmatter.date;
                const image = frontmatter && frontmatter.image && frontmatter.image.publicURL;
                const slug = fields && fields.slug;

                return {
                  title,
                  date,
                  url: url.resolve(siteUrl, slug),
                  html: image ? `<p><img src="${url.resolve(siteUrl, image)}" alt="${title}" class="webfeedsFeaturedVisual" /></p>${html}` : html,
                };
              });
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                pageContext
                path
              }
            }
          }
        `,
        serialize: ({ path, pageContext }) => ({
          url: path,
          lastmod: (pageContext && pageContext.lastModified) || null,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [siteMetadata.googleGtag],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: [`develop`],
        extensions: [`js`, `jsx`, `ts`, `tsx`],
        exclude: [`node_modules`, `.cache`, `public`],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [`X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: accelerometer=(), autoplay=(), ambient-light-sensor=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=()`, `X-Content-Type-Options: nosniff`],
          '/manifest.webmanifest': ['Content-Type: application/manifest+json'],
        },
        mergeSecurityHeaders: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
