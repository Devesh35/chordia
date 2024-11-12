import { SelectItem, SelectItemDivider, SelectItemElement } from '@li/types/design';
import { get } from './Object';

export const optionsFromStrings = <T extends string>(items: T[] | readonly T[]): SelectItemElement<Lowercase<T>>[] =>
  items.map((i) => ({ id: i.toLowerCase() as Lowercase<typeof i>, item: i }));

export const optionsFromObject = <T extends string>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[],
  { idPath, itemPath }: { idPath?: string; itemPath?: string },
): SelectItemElement<Lowercase<T>>[] =>
  items.map((i) => ({
    id: ((idPath && get(i, idPath)) || '') as Lowercase<T>,
    item: (itemPath && get(i, itemPath)) || '',
  }));

export const isSelectItemDivider = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: SelectItem,
): item is SelectItemDivider => item?.id === 'divider';
