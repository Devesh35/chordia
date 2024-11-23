import { FormSection } from '@li/types/design';
import { CountriesOption } from './Country';
import { CountryStateOptions } from './CountryStates';

export const Address: FormSection = {
  id: 'address',
  title: 'Address',
  items: [
    {
      id: 'address',
      label: 'Door No/Street/Cross',
      placeholder: 'Door No/Street/Cross',
    },
    {
      id: 'address2',
      label: 'Building/Flat no',
      placeholder: 'Building/Flat no',
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
      id: 'country',
      type: 'select-submenu',
      label: 'Country',
      placeholder: 'Country',
      options: CountriesOption,
      optionsSub: CountryStateOptions,
      reverseOrder: true,
      sub: {
        id: 'state',
        label: 'State',
        placeholder: 'State',
      },
    },
  ],
};
//  as const;
