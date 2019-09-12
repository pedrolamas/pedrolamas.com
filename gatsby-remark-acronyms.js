var visit = require('unist-util-visit');

const acronyms = {
  API: 'Application Programming Interface',
  ASAP: 'As Soon As Possible',
  CTP: 'Community Technology Preview',
  DIY: 'Do It Yourself',
  DR: "Didn't Read",
  GAC: 'Global Assembly Cache',
  GDI: 'Graphics Device Interface',
  GIF: 'Graphics Interchange Format',
  GPG: 'GNU Privacy Guard',
  GPU: 'Graphical Processing Unit',
  GUI: 'Graphical User Interface',
  HTML: 'Hypertext Markup Language',
  HTTP: 'Hypertext Transfer Protocol',
  HTTPS: 'HTTP Secure',
  IE: 'Internet Explorer',
  IO: 'Input/Output',
  JPEG: 'Joint Photographic Experts Group',
  JSON: 'JavaScript Object Notation',
  L10N: 'Localization',
  L2TP: 'Layer two Tunneling Protocol',
  MCP: 'Microsoft Certified Professional',
  MS: 'Microsoft',
  MSDN: 'Microsoft Developer Network',
  MVP: 'Most Valuable Professional',
  MVVM: 'Model View ViewModel',
  NFC: 'Near Field Communication',
  PDF: 'Portable Document Format',
  PGP: 'Pretty Good Privacy',
  PNG: 'Portable Network Graphics',
  PR: 'Pull Request',
  RSS: 'Really Simple Syndication',
  SBC: 'Small Board Computer',
  SDK: 'Software Development Kit',
  SVGA: 'Super Video Graphics Array',
  SXGA: 'Super Extended Graphics Array',
  TL: 'Too Long',
  UAP: 'Universal Apps Platform',
  UI: 'User Interface',
  UK: 'United Kingdom',
  URI: 'Uniform Resource Identifier',
  URL: 'Uniform Resource Locator',
  USA: 'United States of America',
  UWP: 'Universal Windows Platform',
  VB: 'Visual Basic',
  VGA: 'Video Graphics Array',
  WIP: 'Work In Progress',
  WNS: 'Windows Push Notification Service',
  VOIP: 'Voice Over IP',
  WOMM: 'Works On My Machine',
  WP: 'Windows Phone',
  WP7: 'Windows Phone 7',
  WP8: 'Windows Phone 8',
  WVGA: 'Wide Video Graphics Array',
  WWW: 'World Wide Web',
  WXGA: 'Wide Extended Graphics Array',
  XAML: 'Extensible Application Markup Language',
  XHTML: 'Extensible Hypertext Markup Language',
  XML: 'Extensible Markup Language',
  XGA: 'Extended Graphics Array',
  YAML: "YAML Ain't Markup Language",
};

const acronymsRegExp = new RegExp(`\\b(${Object.keys(acronyms).join('|')})\\b`, 'g');

module.exports = ({ markdownNode, markdownAST, getNode, files }) => {
  visit(markdownAST, 'text', (node, index, parent) => {
    if (node.type === 'text' && node.value) {
      var newNodes = node.value.split(acronymsRegExp).map(value => {
        const acronymTitle = acronyms[value];

        return acronymTitle
          ? {
              type: 'html',
              value: `<acronym title="${acronymTitle}">${value}</acronym>`,
            }
          : {
              type: 'text',
              value,
            };
      });

      parent.children.splice(index, 1, ...newNodes);

      return index + newNodes.length;
    }
  });
};
