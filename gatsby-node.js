/* eslint-disable */
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const slugify = require('underscore.string/slugify');

const slug = (path) => slugify(path.replace(/\./g, "dot"));

const fixFrontmatterImageUrl = (node) => {
  if (node.frontmatter) {
    const url = node.frontmatter.image;

    if (url && url.startsWith(`/wp-content/`)) {
      node.frontmatter.image = url.slice(1);
    }
  }
}

const createSlugField = (createNodeField, node, getNode) => {
  const slug = (getNode(node.parent).sourceInstanceName === "posts") ? getSlugForPost(node, getNode) : null;

  createNodeField({
    name: "slug",
    node,
    value: slug
  });
}

const getSlugForPost = (node, getNode) => {
  const value = createFilePath({ node, getNode });

  const [, date, title] = value.match(/^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/);

  return `/${date.replace(/-/g, "/")}/${title}/`;
}

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
    }
  };

  createNode(node);
  createParentChildLink({
    parent: parentNode,
    child: node
  });
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    fixFrontmatterImageUrl(node);

    createSlugField(createNodeField, node, getNode);
  }
  else if (node.internal.type === "DataYaml") {
    createMdxSource("disclaimer", node.disclaimer, node, actions, createNodeId, createContentDigest);

    if (node.author)
    {
      createMdxSource("biography", node.author.biography, node, actions, createNodeId, createContentDigest);
    }
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }`,
    `type MdxFrontmatter @infer {
      categories: [String]
      date: Date
      dateFormatted: Date @dateformat(formatString: "MMMM D, YYYY") @proxy(from: "date")
      last_modified_at: Date
      layout: String
      tags: [String]
      title: String
    }`,
    `type SitemapYaml implements Node @infer {
      sub: [SitemapYamlSub]
    }`,
    `type SitemapYamlSub @infer {
      sub: [SitemapYamlSub]
    }`,
  ];

  createTypes(typeDefs);
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
  {
    allMdx(
      filter: {
        fields: {
          slug: {
            ne: null
          }
        }
      },
      sort: {
        order: DESC, fields: [frontmatter___date]
      }
    )
    {
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
        }
        previous {
          id
        }
      }
    }
  }
  `);

  const { tags, categories, edges } = data.allMdx;

  tags.forEach(tag => {
    createPage({
      path: `/tag/${slug(tag)}/`,
      component: path.resolve(`./src/components/tagArchiveLayout.tsx`),
      context: {
        tag
      }
    });
  });

  categories.forEach(category => {
    createPage({
      path: `/category/${slug(category)}/`,
      component: path.resolve(`./src/components/categoryArchiveLayout.tsx`),
      context: {
        category
      }
    });
  });

  edges.forEach(({ node, previous, next }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/postLayout.tsx`),
      context: {
        id: node.id,
        previousId: previous && previous.id,
        nextId: next && next.id
      }
    });
  });

  const pageSize = 8;
  const totalPages = Math.ceil(edges.length / pageSize);

  for (let index = 0; index < totalPages; index ++) {
    const groupedPosts = edges.slice(index * pageSize, (index + 1) * pageSize);
    const pageIndex = index + 1;

    createPage({
      path: (pageIndex === 1 ? `/` : `/page/${pageIndex}/`),
      component: path.resolve(`./src/components/indexLayout.tsx`),
      context: {
        ids: groupedPosts.map(edge => edge.node.id),
        previousPageIndex: (pageIndex > 1 ? pageIndex - 1 : undefined),
        nextPageIndex: (pageIndex < totalPages ? pageIndex + 1 : undefined)
      }
    })
  }
};
