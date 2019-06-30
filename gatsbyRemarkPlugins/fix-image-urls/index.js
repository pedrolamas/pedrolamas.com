/* eslint-disable */
const select = require(`unist-util-select`);

module.exports = ({ markdownAST }) => {
  const markdownImageNodes = select(markdownAST, `image`);

  markdownImageNodes.map(node => {
    if (node.url.startsWith(`/wp-content/`)) {
      node.url = `../assets/${node.url}`;
    }

    return node;
  });
}
