import { FormSectionGroup } from '@li/types/design';
import { MenuOptions, SubMenuOptions } from '../MenuCategory';
import { UserCategoryOption } from '../User';
import { GSTOptions } from '../General';

const bgtSection = {
  'product-details': {
    form: ['product-details'],
  },
  'product-image': {
    document: ['image'],
  },
};

export const BGTProductDetails: FormSectionGroup<typeof bgtSection> = {
  'product-details': {
    form: [
      {
        id: 'product-details',
        title: 'Product details',
        items: [
          {
            id: 'group',
            label: 'Group',
            placeholder: 'Group',
            type: 'select',
            options: MenuOptions,
          },
          {
            id: 'article',
            label: 'Article',
            placeholder: 'Article',
            type: 'select',
            options: SubMenuOptions['accessories-audio'],
            // type: 'select-submenu',
            // super: 'group', // super is the id of the parent field
            // options: SubMenuOptions,
          },
          {
            id: 'brand',
            label: 'Brand',
            placeholder: 'Brand',
          },
          {
            id: 'productCode',
            label: 'Product code',
            placeholder: 'Product code',
          },
          {
            id: 'type',
            label: 'Type',
            placeholder: 'Type',
            type: 'select',
            options: UserCategoryOption,
          },
          {
            id: 'gst',
            label: 'GST/TAX',
            placeholder: 'GST/TAX',
            type: 'select',
            options: GSTOptions,
          },
          {
            id: 'details',
            label: 'Details',
            placeholder: 'Details',
            type: 'area',
          },
        ],
      },
    ],
  },
  'product-image': {
    document: [
      {
        id: 'product-image',
        title: 'Product Image',
        items: Array.from({ length: 4 }, (_, index) => ({
          id: `image${index + 1}`,
          label: `Image-${index + 1}`,
        })),
      },
    ],
  },
};
