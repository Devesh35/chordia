import { optionsFromStrings } from '@li/config/utils';
import { FormSectionGroup } from '@li/types/design';
import { CompanyProfile } from './CompanyProfile';
import { Export } from './Export';
import { ProductSpecification } from './ProductSpecification';

export const productType = [
  'BGT',
  'Tour',
  'Cake',
  'Store',
] as const;
export type ProductType = Lowercase<(typeof productType)[number]>;
export const ProductTypeOptions = optionsFromStrings(productType);

const specifications = {
  options: {
    form: ['export', 'product-specification', 'company-profile'],
  },
} as const;
export const AddProductSpecifications: FormSectionGroup<typeof specifications> =
  {
    options: {
      form: [Export, ProductSpecification, CompanyProfile],
    },
  };
