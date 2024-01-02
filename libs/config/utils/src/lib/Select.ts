/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectItem } from '@li/design/elements';
import { get } from './Object';

export const optionsFromStrings = <T extends string>(
  items: T[] | readonly T[],
): SelectItem<T>[] => items.map((i) => ({ id: i, item: i }));

export const optionsFromObject = (
  items: any[],
  { idPath, itemPath }: { idPath?: string; itemPath?: string },
): SelectItem[] =>
  items.map((i) => ({
    id: (idPath && get(i, idPath)) || '',
    item: (itemPath && get(i, itemPath)) || '',
  }));
