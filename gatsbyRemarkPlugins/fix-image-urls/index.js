const path = require('path');
const select = require('unist-util-select');

module.exports = ({ markdownNode, markdownAST, files }) => {
  const markdownImageNodes = select(markdownAST, 'image');

  if (!markdownNode.fileAbsolutePath) {
    return;
  }

  const markdownNodePath = path.posix.dirname(markdownNode.fileAbsolutePath);

  markdownImageNodes.forEach(node => {
    if (node.url.startsWith('/wp-content/')) {
      const fileNode = files.find(x => x && x.absolutePath && x.absolutePath.endsWith(node.url));

      if (fileNode) {
        const relativePath = path.posix.relative(markdownNodePath, fileNode.absolutePath);

        node.url = relativePath;
      }
    }
  });

  const markdownLinkNodes = select(markdownAST, 'link');

  markdownLinkNodes.forEach(node => {
    if (node.url.startsWith(`/wp-content/`)) {
      const fileNode = files.find(x => x && x.absolutePath && x.absolutePath.endsWith(node.url));

      if (fileNode) {
        const relativePath = path.posix.relative(markdownNodePath, fileNode.absolutePath);

        node.url = relativePath;
      }
    }
  });
};
