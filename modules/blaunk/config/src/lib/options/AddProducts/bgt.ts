import { FormSectionGroup } from '@li/types/design';
import { GSTOptions } from '../General';
import { UserCategoryOption } from '../User';

const bgtSection = {
  // 'product-group': {
  //   form: ['product-group'],
  // },
  'product-details': {
    form: ['product-details'],
  },
  'product-image': {
    document: ['image'],
  },
} as const;

export const BGTProductDetails: FormSectionGroup<typeof bgtSection> = {
  // 'product-group': {
  //   form: [
  //     {
  //       id: 'product-group',
  //       title: 'Product Group',
  //       items: [
  //         {
  //           id: 'group',
  //           label: 'Group',
  //           placeholder: 'Group',
  //           type: 'select',
  //           options: MenuOptions,
  //         },
  //         {
  //           id: 'article',
  //           label: 'Article',
  //           placeholder: 'Article',
  //           type: 'select-submenu',
  //           super: 'group',
  //           options: SubMenuOptions,
  //         },
  //       ],
  //     },
  //   ],
  // },
  'product-details': {
    form: [
      {
        id: 'product-details',
        title: 'Product details',
        items: [
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
