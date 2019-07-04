const path = require('path');
const select = require(`unist-util-select`);

module.exports = ({ markdownNode, markdownAST, getNode, pathPrefix }) => {
  const markdownImageNodes = select(markdownAST, `image`);

  if (!markdownImageNodes || markdownImageNodes.length === 0) {
    return;
  }

  const parentNode = getNode(markdownNode.parent);

  const rootPath = parentNode.sourceInstanceName === 'posts' ? '/content/posts/' : `/${parentNode.relativeDirectory}`;
  const relativePath = path.relative(rootPath, '/content/assets');

  markdownImageNodes.forEach(node => {
    if (node.url.startsWith(`/wp-content/`)) {
      node.url = `${relativePath}/${node.url}`;
    }
  });
};
