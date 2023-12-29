/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectItem } from '@li/design/elements';
import { get } from './Object';

export const optionsFromStrings = (items: string[]): SelectItem[] =>
  items.map((i) => ({ id: i, item: i }));

export const optionsFromObject = (
  items: any[],
  { idPath, itemPath }: { idPath?: string; itemPath?: string },
): SelectItem[] =>
  items.map((i) => ({
    id: (idPath && get(i, idPath)) || '',
    item: (itemPath && get(i, itemPath)) || '',
  }));
