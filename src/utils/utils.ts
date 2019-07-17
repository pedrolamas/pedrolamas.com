import { slugify } from 'underscore.string';

import * as GraphQl from './graphql.generated';

type predType<T> = (x: T) => boolean;
type fnType<T, U> = (x: T) => U;

type MatchedInterface<T> = {
  on: () => MatchedInterface<T>;
  otherwise: () => T;
};

export const matched = <T>(x: T): MatchedInterface<T> => ({
  on: () => matched(x),
  otherwise: () => x,
});

type MatchInterface<T, U> = {
  on: (pred: predType<T>, fn: fnType<T, U>) => MatchInterface<T, U>;
  otherwise: (fn: fnType<T, U>) => U;
};

export const match = <T, U>(x: T): MatchInterface<T, U> => ({
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: fn => fn(x),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IsNumber = (x: any): x is number => typeof x === 'number';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IsString = (x: any): x is string => typeof x === 'string';

export const IsValidDate = (date: Date): boolean => date instanceof Date && !isNaN(+date);

export const ValidDateOrUndefined = (date: Date): Date | undefined => (IsValidDate(date) ? date : undefined);

export const Slug = (path: string): string => slugify(path.replace(/\./g, 'dot'));

type PostMdxFrontmatterType = GraphQl.PostMdxFragment extends { frontmatter: infer T } ? NonNullable<T> : unknown;

export type SafeMdxMetadata = {
  id: string;
  title: string;
  url: string;
  date: string;
  dateFormatted: string;
  categories?: string[];
  tags?: string[];
  image?: PostMdxFrontmatterType extends { image: infer T } ? NonNullable<T> : unknown;
  originalFile?: string;
};

export const SafeMetadataFromMdx = (mdx: Partial<GraphQl.Mdx> & Partial<GraphQl.PostMdxFragment>): SafeMdxMetadata => {
  const { id, fields, frontmatter, file } = mdx;

  return {
    id: id || '',
    title: (frontmatter && frontmatter.title) || '(untitled)',
    url: (fields && fields.slug) || '',
    date: (frontmatter && frontmatter.date) || '',
    dateFormatted: (frontmatter && frontmatter.dateFormatted) || '',
    categories: (frontmatter && frontmatter.categories && (frontmatter.categories.filter(x => x) as string[])) || undefined,
    tags: (frontmatter && frontmatter.tags && (frontmatter.tags.filter(x => x) as string[])) || undefined,
    image: (frontmatter && frontmatter.image) || undefined,
    originalFile: (file && file.base) || undefined,
  };
};
