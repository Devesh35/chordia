import { optionsFromStrings } from '@li/config/utils';

export const Store = [
  'Automobile Spares shop',
  'Bicycle shop',
  'Book shop',
  'Cake shop',
  'Custom shop',
  'Emporium',
  'Flowers shop',
  'Gift shop',
  'Grocery mart',
  'Handmade',
  'Jewel shop',
  'Music shop',
  'Paint shop',
  'Pet shop',
  'Plastic world',
  'Sweet shop',
] as const;

export const storeOptions = optionsFromStrings(Store);
