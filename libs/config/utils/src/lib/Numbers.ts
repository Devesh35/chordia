export const limitDecimal = (decimals: number, value?: number) =>
  value !== undefined
    ? () => Number(value.toFixed(decimals))
    : (val: number) => Number(val.toFixed(decimals));
