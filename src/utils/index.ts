import { slugify } from 'underscore.string';

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
