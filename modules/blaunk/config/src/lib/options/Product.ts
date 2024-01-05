import { optionsFromStrings } from '@li/config/utils';

const productType = ['B2B', 'Tour', 'Cake', 'Boutique'] as const;
export const ProductTypeOptions = optionsFromStrings(productType);
