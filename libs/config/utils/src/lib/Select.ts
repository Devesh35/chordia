import { get } from './Object';
import { SelectItemDivider, SelectItemElement } from '@li/types/design';

export const optionsFromStrings = <T extends string>(
  items: T[] | readonly T[],
): SelectItemElement<T>[] => items.map((i) => ({ id: i, item: i }));

export const optionsFromObject = <T extends string>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[],
  { idPath, itemPath }: { idPath?: string; itemPath?: string },
): SelectItemElement<T>[] =>
  items.map((i) => ({
    id: ((idPath && get(i, idPath)) || '') as T,
    item: (itemPath && get(i, itemPath)) || '',
  }));

export const isSelectItemDivider = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
): item is SelectItemDivider => item?.id === 'divider';
