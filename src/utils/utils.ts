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
  otherwise: (fn) => fn(x),
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
  excerpt?: string;
  title: string;
  url: string;
  date?: string;
  dateFormatted: string;
  lastModified?: string;
  categories?: string[];
  tags?: string[];
  image?: PostMdxFrontmatterType extends { image: infer T } ? NonNullable<T> : unknown;
  originalFile?: string;
};

export const SafeMetadataFromMdx = (mdx: Pick<GraphQl.Mdx, 'id'> & Partial<GraphQl.Mdx> & Partial<GraphQl.PostMdxFragment>): SafeMdxMetadata => {
  const { id, excerpt, fields, frontmatter, file } = mdx;

  return {
    id,
    excerpt,
    title: frontmatter?.title ?? '(untitled)',
    url: fields?.slug ?? '',
    date: frontmatter?.date ?? undefined,
    dateFormatted: frontmatter?.dateFormatted ?? '',
    // eslint-disable-next-line @typescript-eslint/camelcase
    lastModified: frontmatter?.last_modified_at ?? undefined,
    categories: (frontmatter?.categories?.filter((x) => x) as string[]) ?? undefined,
    tags: (frontmatter?.tags?.filter((x) => x) as string[]) ?? undefined,
    image: frontmatter?.image ?? undefined,
    originalFile: file?.base ?? undefined,
  };
};
