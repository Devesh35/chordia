export type Prop = number | string;

export const getValue = (n: Prop, px?: true): string =>
  typeof n === 'number' ? `${n}${px ? 'px' : 'rem'}` : n;
export const getCSS = (k: string, n?: Prop, px?: true): string => {
  return n != undefined ? `${k}: ${getValue(n, px)};` : '';
};
