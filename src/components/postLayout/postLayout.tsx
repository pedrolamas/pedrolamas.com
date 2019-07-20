import React from 'react';
import { graphql } from 'gatsby';

import Head from '../head';
import PostLayoutArticle from './postLayoutArticle';
import PostLayoutComments from './postLayoutComments';
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
    <>
      <Head title={mdxMeta.title} />

      <MdxContext.Provider
        value={{
          mdx,
          meta: mdxMeta,
        }}
      >
        <main role="main" id="main">
          <PostLayoutArticle />

          <PostLayoutAuthor />

          <PostLayoutComments />

          <PostLayoutNavigation previousMdx={previousMdx || undefined} nextMdx={nextMdx || undefined} />
        </main>
      </MdxContext.Provider>
    </>
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
