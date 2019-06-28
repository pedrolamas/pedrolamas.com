import React from 'react';

import PageLayout from './pageLayout';
import Link from './link';
import { Query, Mdx } from '../generated/graphql';

type PostsGroupedByKey = {
  [key: string]: Mdx[];
}

type ArchiveLayoutProps = {
  title?: string;
  data: Query;
  children?: never;
}

const ArchiveLayout: React.FunctionComponent<ArchiveLayoutProps> = ({ title, data }) => {
  const posts = data.allMdx && data.allMdx.edges;

  if (!posts) return null;

  const postsGroupedByYear: PostsGroupedByKey = posts.reduce((reduced: PostsGroupedByKey, edge) => {
    const { node } = edge;

    if (node && node.frontmatter) {
      const year = new Date(node.frontmatter.date).getFullYear().toString();

      if (!reduced[year]) {
        reduced[year] = [];
      }

      reduced[year].push(node);
    }

    return reduced;
  }, {} as PostsGroupedByKey);

  return (
    <PageLayout title={title}>
      {Object.entries(postsGroupedByYear).reverse().map(([year, posts], index) => (
        <React.Fragment key={index}>
          <h2>{year}</h2>
          <ul>
            {posts.map((node, index2) => (
              <React.Fragment key={index2}>
                {node.fields && node.frontmatter && node.fields.slug &&
                  <li>
                    <h3 className="post-entry">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}{' '}
                        <small>{node.frontmatter.dateFormatted}</small>
                      </Link>
                    </h3>
                  </li>
                }
              </React.Fragment>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </PageLayout>
  );
}

ArchiveLayout.defaultProps = {
  title: "Archive"
};

export default ArchiveLayout;
