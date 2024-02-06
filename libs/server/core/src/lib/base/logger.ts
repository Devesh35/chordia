export const log = (item: string | object, ...items: object[]) => {
  let log = item;
  if (typeof log === 'object') log = JSON.stringify(log);
  console.log(`${+new Date()}::${log}`, items.length ? '|' : '', ...items);
};

export const err = (e: Error) => {
  console.error(e);
};
