const path = require('path');
const select = require('unist-util-select');

const isInternal = url => !url.includes(':') && !url.startsWith('//');

module.exports = ({ markdownNode, markdownAST, getNode, files }) => {
  if (!markdownNode.fileAbsolutePath) {
    return;
  }

  const filteredFiles = files.filter(x => x && x.relativePath);

  const parentNode = getNode(markdownNode.parent);
  const parentNodeAbsoluteDir = parentNode.dir + '/';
  const parentNodeRelativeDir = path.posix.dirname(parentNode.relativePath) + '/';

  const fixUrl = url => {
    if (isInternal(url)) {
      const relativePath = path.posix.resolve('/', parentNodeRelativeDir, url);
      const rootlessRelativePath = relativePath.substr(1);

      const fileNode = filteredFiles.find(x => x.relativePath === rootlessRelativePath);

      if (fileNode) {
        const relativePath = path.posix.relative(parentNodeAbsoluteDir, fileNode.absolutePath);

        return relativePath;
      }
    }

    return url;
  };

  select(markdownAST, 'image').forEach(node => {
    node.url = fixUrl(node.url);
  });

  select(markdownAST, 'link').forEach(node => {
    node.url = fixUrl(node.url);
  });

  const frontmatterImage = markdownNode.frontmatter && markdownNode.frontmatter.image;

  if (frontmatterImage) {
    markdownNode.frontmatter.image = fixUrl(frontmatterImage);
  }
};
