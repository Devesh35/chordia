import { optionsFromStrings } from '@li/config/utils';

export const RoomTypes = [
  'Single',
  'Double + Infant',
  'Double + 1 Kid',
  'Double + 2 Kid',
  '3 Adult + 1 Kid',
  '3 Adult + 2 Kid',
  '3 Adult',
  '4 Adult',
] as const;

export const RoomTypesOptions = optionsFromStrings(RoomTypes);
