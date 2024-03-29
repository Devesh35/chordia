import { FormSection } from '@li/types/design';
import { CountriesOption } from './Country';

export const Address: FormSection = {
  id: 'address',
  title: 'Address',
  items: [
    {
      id: 'address',
      label: 'Address',
      placeholder: 'Address',
    },
    {
      id: 'address2',
      label: 'Address 2',
      placeholder: 'Address 2',
    },
    {
      id: 'landmark',
      label: 'Landmark',
      placeholder: 'Landmark',
    },
    {
      id: 'district',
      label: 'District',
      placeholder: 'District',
    },
    {
      id: 'city',
      label: 'City',
      placeholder: 'City',
    },
    {
      id: 'zip',
      label: 'Zip',
      placeholder: 'Zip',
      type: 'number',
    },
    {
      id: 'state',
      label: 'State',
      placeholder: 'State',
    },
    {
      id: 'country',
      type: 'select',
      label: 'Country',
      placeholder: 'Country',
      options: CountriesOption,
    },
  ],
};
//  as const;
