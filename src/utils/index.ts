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

export const isValidDate = (date: Date): boolean => date instanceof Date && !isNaN(+date);

export const validDateOrUndefined = (date: Date): Date | undefined => (isValidDate(date) ? date : undefined);

export const slug = (path: string): string => slugify(path.replace(/\./g, 'dot'));
