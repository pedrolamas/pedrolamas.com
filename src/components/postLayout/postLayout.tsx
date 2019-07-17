import React from 'react';
import { graphql } from 'gatsby';

import RootLayout from '../rootLayout';
import Head from '../head';
import PostLayoutArticle from './postLayoutArticle';
import PostLayoutAuthor from './postLayoutAuthor';
import PostLayoutNavigation from './postLayoutNavigation';
import MdxContext from '../mdxContext';
import { GraphQl, Utils } from '../../utils/';

type PostLayoutProps = {
  data: GraphQl.PostLayoutQuery;
};

const PostLayout: React.FunctionComponent<PostLayoutProps> = ({ data }) => {
  const { mdx, previousMdx, nextMdx } = data;

  if (!mdx) throw Error('Mdx expected!');

  const mdxMeta = Utils.SafeMetadataFromMdx(mdx);

  return (
    <RootLayout>
      <Head title={mdxMeta.title} />

      <MdxContext.Provider
        value={{
          mdx,
          meta: mdxMeta,
        }}
      >
        <main role="main">
          <PostLayoutArticle />

          <PostLayoutAuthor />

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

          <PostLayoutNavigation previousMdx={previousMdx || undefined} nextMdx={nextMdx || undefined} />
        </main>
      </MdxContext.Provider>
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
    file: parent {
      ... on File {
        base
      }
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
  query PostLayout($id: String!, $previousId: String, $nextId: String) {
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
