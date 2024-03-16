export const toLowerCase = <T extends string = string>(str: T): Lowercase<T> =>
  str.toLowerCase() as Lowercase<T>;

export const capitalize = <T extends string = string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()) as Capitalize<T>;

export const fromCamelCase = <T extends string = string>(
  str: T,
): Capitalize<T> =>
  capitalize(
    str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()),
  ) as Capitalize<T>;
