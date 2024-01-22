export const toLowerCase = <T extends string = string>(str: T): Lowercase<T> =>
  str.toLowerCase() as Lowercase<T>;

export const capitalize = <T extends string = string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
