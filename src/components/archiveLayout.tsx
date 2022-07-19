import React from 'react';

import PageLayout from './pageLayout';
import Link from './link';
import { Utils } from '../utils';

type PostsGroupedByKey = {
  [key: string]: Queries.PostMdxFragment[];
};

type ArchiveLayoutProps = {
  title: string;
  data: Queries.ArchivePageQuery | Queries.CategoryArchiveLayoutQuery | Queries.TagArchiveLayoutQuery;
  children?: never;
};

const ArchiveLayout: React.FunctionComponent<ArchiveLayoutProps> = ({ title, data }) => {
  const posts = data.allMdx.edges;

  if (!posts) return null;

  const postsGroupedByYearAsObject = posts.reduce<PostsGroupedByKey>((reduced, { node }) => {
    const { frontmatter } = node;

    if (frontmatter?.date) {
      const year = new Date(frontmatter.date).getFullYear().toString();

      if (!reduced[year]) {
        reduced[year] = [];
      }

      reduced[year].push(node);
    }

    return reduced;
  }, {});

  const postsGroupedByYear = Object.entries(postsGroupedByYearAsObject)
    .reverse()
    .map(([year, posts2], index) => (
      <React.Fragment key={index}>
        <h2>{year}</h2>
        <ul>
          {posts2.map((mdx, index2) => {
            const { title, dateFormatted, url } = Utils.SafeMetadataFromMdx(mdx);

            return (
              <li key={index2}>
                <h3 className="post-entry">
                  <Link to={url}>
                    {title} <small>{dateFormatted}</small>
                  </Link>
                </h3>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    ));

  return <PageLayout title={title}>{postsGroupedByYear}</PageLayout>;
};

ArchiveLayout.displayName = 'ArchiveLayout';

export default ArchiveLayout;
