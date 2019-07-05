const path = require('path');
const select = require('unist-util-select');

const isInternalAbsolute = url => /^\/(?!\/)/.test(url);

module.exports = ({ markdownNode, markdownAST, files }) => {
  const markdownImageNodes = select(markdownAST, 'image');

  if (!markdownNode.fileAbsolutePath) {
    return;
  }

  const markdownNodePath = path.posix.dirname(markdownNode.fileAbsolutePath);

  markdownImageNodes.forEach(node => {
    if (isInternalAbsolute(node.url)) {
      const nodeRelativePath = node.url.substr(1);

      const fileNode = files.find(x => x && x.relativePath && x.relativePath === nodeRelativePath);

      if (fileNode) {
        const relativePath = path.posix.relative(markdownNodePath, fileNode.absolutePath);

        node.url = relativePath;
      }
    }
  });

  const markdownLinkNodes = select(markdownAST, 'link');

  markdownLinkNodes.forEach(node => {
    if (isInternalAbsolute(node.url)) {
      const nodeRelativePath = node.url.substr(1);

      const fileNode = files.find(x => x && x.relativePath && x.relativePath === nodeRelativePath);

      if (fileNode) {
        const relativePath = path.posix.relative(markdownNodePath, fileNode.absolutePath);

        node.url = relativePath;
      }
    }
  });
};
