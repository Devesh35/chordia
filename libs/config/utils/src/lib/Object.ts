// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NestedObject = { [key: string]: any };

export const get = <T>(
  obj: NestedObject,
  path: string,
  defaultValue?: T,
): T | undefined =>
  path
    .split('.')
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue),
      obj,
    ) as T;
