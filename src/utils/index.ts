import { slugify } from 'underscore.string';

import { Mdx } from '../generated/graphql';

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

export const IsValidDate = (date: Date): boolean => date instanceof Date && !isNaN(+date);

export const ValidDateOrUndefined = (date: Date): Date | undefined => (IsValidDate(date) ? date : undefined);

export const Slug = (path: string): string => slugify(path.replace(/\./g, 'dot'));

type SafeMdxMetadata = {
  id: string;
  title: string;
  url: string;
  date: string;
  dateFormatted: string;
};

export const SafeMetadataFromMdx = (mdx: Mdx): SafeMdxMetadata => {
  const { id, fields, frontmatter } = mdx;

  return {
    id,
    title: (frontmatter && frontmatter.title) || '(untitled)',
    url: (fields && fields.slug) || '',
    date: (frontmatter && frontmatter.date) || '',
    dateFormatted: (frontmatter && frontmatter.dateFormatted) || '',
  };
};
