import { optionsFromStrings } from '@li/config/utils';

const productType = ['BGT', 'Tour', 'Cake', 'Boutique'] as const;
export const ProductTypeOptions = optionsFromStrings(productType);
