import { FormSectionGroup } from '@li/types/design';
import { GSTOptions } from '../General';
import { MenuOptions, SubMenuOptions } from '../MenuCategory';
import { UserCategoryOption } from '../User';

const bgtSection = {
  'product-details': {
    form: ['product-details'],
  },
  'product-image': {
    document: ['image'],
  },
} as const;

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
            type: 'select-submenu',
            options: MenuOptions,
            optionsSub: SubMenuOptions,
            sub: {
              id: 'article',
              label: 'Article',
              placeholder: 'Article',
            },
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
            id: 'commission',
            label: 'Blaunk commission',
            placeholder: '2.5%',
            type: 'text',
            isReadOnly: true,
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
