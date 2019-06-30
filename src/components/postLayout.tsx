import React from 'react';
import { graphql } from 'gatsby';

import RootLayout from './rootLayout';
import Head from './head';
import SiteContext from './siteContext';
import MdxArticle from './mdxArticle';
import MdxRenderer from './mdxRenderer';
import Link from './link';
import { Query, Mdx } from '../generated/graphql';

type PostLayoutProps = {
  data: Query & {
    previousMdx?: Mdx | null;
    nextMdx?: Mdx | null;
  };
}

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({ data }) => {
  const { mdx, previousMdx, nextMdx } = data;

  if (!mdx) throw Error("Mdx expected!");

  const { frontmatter } = mdx;

  const title = (frontmatter && frontmatter.title) || "(untitled)";

  return (
    <RootLayout>
      <Head title={title} />

      <SiteContext.Consumer>
        {siteContext => {
          const { siteMetadata } = siteContext;

          const author = siteMetadata && siteMetadata.author;

          return (
            <main role="main">
              <article id={`post${mdx.id}`} className={`post post${mdx.id}`}>
                <header className="post-header">
                  <h1 className="post-title">{title}</h1>
                </header>

                <MdxArticle mdx={mdx} />
              </article>

              {author && author.picture &&
                <section className="post-author">
                  <img src={author.picture} className="author-thumbnail" alt={author.name || "Author picture"} />
                  <div className="author-biography">
                    <h2>by {author.name}</h2>
                    <p>
                      {author.biography &&
                        <MdxRenderer>{author.biography}</MdxRenderer>
                      }
                    </p>
                  </div>
                </section>
              }

              {/* {% if site.disqus_shortname %}
                {% unless page.nocomments %}
                  <section className="post-comments">
                    <div id="disqus_thread"></div>
                    <script>
                      var disqus_config = function () {
                        this.page.url = '{{ page.url | absolute_url }}'
                      };
                      (function() {
                      var d = document, s = d.createElement('script');
                      s.src = '//{{ site.disqus_shortname }}.disqus.com/embed.js';
                      s.setAttribute('data-timestamp', +new Date());
                      (d.head || d.body).appendChild(s);
                      })();
                    </script>
                    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                  </section>
                {% endunless %}
              {% endif %} */}

              {(previousMdx || nextMdx) &&
                <nav className="post-navigation" role="navigation">
                  {previousMdx && previousMdx.fields && previousMdx.fields.slug && previousMdx.frontmatter &&
                    <>
                      <h2 aria-hidden="true">Previous</h2>
                      <span className="screen-reader-text">Previous post:</span>
                      <h3 className="post-entry">
                        <Link to={previousMdx.fields.slug} title={`Previous Post: ${previousMdx.frontmatter.title}`}>
                          {previousMdx.frontmatter.title}{' '}
                          <small>{previousMdx.frontmatter.dateFormatted}</small>
                        </Link>
                      </h3>
                    </>
                  }
                  {nextMdx && nextMdx.fields && nextMdx.fields.slug && nextMdx.frontmatter &&
                    <>
                      <h2 aria-hidden="true">Next</h2>
                      <span className="screen-reader-text">Next post:</span>
                      <h3 className="post-entry">
                        <Link to={nextMdx.fields.slug} title={`Next Post: ${nextMdx.frontmatter.title}`}>
                          {nextMdx.frontmatter.title}{' '}
                          <small>{nextMdx.frontmatter.dateFormatted}</small>
                        </Link>
                      </h3>
                    </>
                  }
                </nav>
              }
            </main>
          );
        }}
      </SiteContext.Consumer>
    </RootLayout>
  );
};

export const postMdxFragment = graphql`
  fragment PostMdx on Mdx {
    id
    code {
      body
    }
    fields {
      slug
    }
    frontmatter {
      categories
      date
      dateFormatted
      image {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      last_modified_at
      layout
      tags
      title
    }
  }
`;

export const siblingPostMdxFragment = graphql`
  fragment SiblingPostMdx on Mdx {
    id
    fields {
      slug
    }
    frontmatter {
      dateFormatted
      title
    }
  }
`;

export const pageQuery = graphql`
  query($id: String!, $previousId: String, $nextId: String) {
    mdx(id: { eq: $id }) {
      ...PostMdx
    }
    previousMdx: mdx(id: { eq: $previousId }) {
      ...SiblingPostMdx
    }
    nextMdx: mdx(id: { eq: $nextId }) {
      ...SiblingPostMdx
    }
  }
`;

export default PostLayout;
