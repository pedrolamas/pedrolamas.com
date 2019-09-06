import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MdxArticleSymbolsProps = {};

const MdxArticleSymbols: React.FunctionComponent<MdxArticleSymbolsProps> = () => (
  <>
    <FontAwesomeIcon icon="calendar-alt" symbol="article-posted-on" />
    <FontAwesomeIcon icon="folder" symbol="article-categories" />
    <FontAwesomeIcon icon="tags" symbol="article-tags" />
    <FontAwesomeIcon icon="comment" symbol="article-comments" />
    <FontAwesomeIcon icon="edit" symbol="article-edit" />
  </>
);

export default MdxArticleSymbols;
