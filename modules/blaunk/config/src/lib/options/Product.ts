import { optionsFromStrings } from '@li/config/utils';

export const productType = [
  'BGT',
  'Tour',
  'Cake',
  'Boutique',
  'Store',
] as const;
export const ProductTypeOptions = optionsFromStrings(productType);
