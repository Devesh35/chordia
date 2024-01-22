import { optionsFromStrings } from '@li/config/utils';

export const productType = [
  'BGT',
  'Tour',
  'Cake',
  'Boutique',
  'Store',
] as const;
export type ProductType = Lowercase<(typeof productType)[number]>;
export const ProductTypeOptions = optionsFromStrings(productType);
