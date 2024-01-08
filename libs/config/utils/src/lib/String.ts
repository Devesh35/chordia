export const toLowerCase = <T extends string = string>(str: T): Lowercase<T> =>
  str.toLowerCase() as Lowercase<T>;
