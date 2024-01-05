import { FormSection } from '@li/types/design';
import { MenuOptions, SubMenuOptions } from '../MenuCategory';
import { UserCategoryOption } from '../User';
import { GSTOptions } from '../General';

export const BGTProductDetails: FormSection = {
  id: 'product-details',
  label: 'Product details',
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
};
