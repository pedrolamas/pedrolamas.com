const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const slugify = require('underscore.string/slugify');

const slug = (path) => slugify(path.replace(/\./g, 'dot'));

const createSlugField = (createNodeField, node, getNode) => {
  const parentNode = getNode(node.parent);
  const slug = parentNode.sourceInstanceName === 'posts' ? getSlugForPost(node, getNode) : null;

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  });
};

const getSlugForPost = (node, getNode) => {
  const value = createFilePath({ node, getNode });

  const [, date, title] = value.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/);

  return `/${date.replace(/-/g, '/')}/${title}/`;
};

const createMdxSource = (id, data, parentNode, actions, createNodeId, createContentDigest) => {
  const { createNode, createParentChildLink } = actions;

  const node = {
    id: createNodeId(`${parentNode.id} >> ${id}`),
    parent: parentNode.id,
    children: [],
    internal: {
      type: `MdxSource`,
      content: data,
      contentDigest: createContentDigest(data),
      mediaType: `text/markdown`,
    },
  };

  createNode(node);
  createParentChildLink({
    parent: parentNode,
    child: node,
  });
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField } = actions;

  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'Mdx':
      createSlugField(createNodeField, node, getNode);

      break;

    case 'Site':
      const { disclaimer, authorDetails } = node.siteMetadata;

      createMdxSource('disclaimer', disclaimer, node, actions, createNodeId, createContentDigest);

      if (authorDetails && authorDetails.biography) {
        createMdxSource('biography', authorDetails.biography, node, actions, createNodeId, createContentDigest);
      }

      break;
  }
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `type Site implements Node @infer {
      siteMetadata: SiteSiteMetadata!
    }`,
    `type SiteSiteMetadata @infer {
      title: String!
      description: String
      author: String!
      siteUrl: String!
      lang: String
      logo: File @link(by: "relativePath")
      disclaimer: Mdx @link(by: "rawBody")
      authorDetails: SiteSiteMetadataAuthorDetails
      sidebar: SiteSiteMetadataSidebar
      twitter: SiteSiteMetadataTwitter
    }`,
    `type SiteSiteMetadataAuthorDetails @infer {
      picture: File @link(by: "relativePath")
      biography: Mdx @link(by: "rawBody")
    }`,
    `type SiteSiteMetadataSidebar @infer {
      logos: [SiteSiteMetadataSidebarLogos]
    }`,
    `type SiteSiteMetadataTwitter @infer {
      username: String!
    }`,
    `type SiteSiteMetadataSidebarLogos @infer {
      image: File! @link(by: "relativePath")
      title: String!
    }`,
    `type SitemapYaml implements Node @infer {
      sub: [SitemapYamlSub]
    }`,
    `type SitemapYamlSub @infer {
      sub: [SitemapYamlSub]
    }`,
    `type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }`,
    `type MdxFrontmatter @infer {
      categories: [String]
      date: Date
      dateFormatted: Date @dateformat(formatString: "MMMM D, YYYY") @proxy(from: "date")
      image: File @fileByRelativePath
      last_modified_at: Date
      tags: [String]
      title: String
    }`,
  ];

  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMdx(filter: { fields: { slug: { ne: null } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
        tags: distinct(field: frontmatter___tags)
        categories: distinct(field: frontmatter___categories)
        edges {
          next {
            id
          }
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              last_modified_at
            }
          }
          previous {
            id
          }
        }
      }
    }
  `);

  const { tags, categories, edges } = data.allMdx;

  tags.forEach((tag) => {
    createPage({
      path: `/tag/${slug(tag)}/`,
      component: path.resolve(`./src/components/tagArchiveLayout.tsx`),
      context: {
        tag,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/category/${slug(category)}/`,
      component: path.resolve(`./src/components/categoryArchiveLayout.tsx`),
      context: {
        category,
      },
    });
  });

  edges.forEach(({ node, previous, next }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/postLayout/postLayout.tsx`),
      context: {
        id: node.id,
        previousId: next && next.id,
        nextId: previous && previous.id,
        lastModified: (node.frontmatter && (node.frontmatter.last_modified_at || node.frontmatter.date)) || null,
      },
    });
  });

  const pageSize = 8;
  const totalPages = Math.ceil(edges.length / pageSize);

  for (let index = 0; index < totalPages; index++) {
    const groupedPosts = edges.slice(index * pageSize, (index + 1) * pageSize);
    const pageIndex = index + 1;

    createPage({
      path: pageIndex === 1 ? `/` : `/page/${pageIndex}/`,
      component: path.resolve(`./src/components/indexLayout/indexLayout.tsx`),
      context: {
        ids: groupedPosts.map((edge) => edge.node.id),
        previousPageIndex: pageIndex > 1 ? pageIndex - 1 : undefined,
        nextPageIndex: pageIndex < totalPages ? pageIndex + 1 : undefined,
      },
    });
  }
};
