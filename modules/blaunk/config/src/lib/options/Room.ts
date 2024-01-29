import { optionsFromStrings } from '@li/config/utils';

export const RoomTypes = [
  'Single',
  'Couple+Infant',
  'Couple+1 Kid',
  'Couple+2 Kid',
  '3 Adult + 1 Kid',
  '3 Adult + 2 Kid',
  '3 Adult',
  '4 Adult',
  '100 Capacity',
  'Above 200 Capacity',
] as const;

export const RoomTypesOptions = optionsFromStrings(RoomTypes);
