import { optionsFromStrings } from '@li/config/utils';
import { FormSectionGroup, SelectItem } from '@li/types/design';
import { CountriesOptionWithFlag } from './Country';

export type MarketGroupIdType = 'clubAndResort' | 'property' | 'appliances' | 'usedVehicle' | 'd2h' | 'misc';

export const MarketGroups: SelectItem<MarketGroupIdType>[] = [
  { id: 'clubAndResort', item: 'Club & Resort' },
  { id: 'property', item: 'Property' },
  { id: 'appliances', item: 'Appliances' },
  { id: 'usedVehicle', item: 'Used Vehicle' },
  { id: 'd2h', item: 'D2H' },
  { id: 'misc', item: 'Miscellaneous' },
];

const MarketProducts: Record<MarketGroupIdType, string[]> = {
  clubAndResort: ['Used membership', 'New (Agent)'],
  property: [
    'For Sale',
    'On Lease Office',
    'On Lease House',
    'Land commercial',
    'Land Agriculture',
    'For Rent',
    'Fully furnished house',
    'Semi-furnished House',
    'Pent house',
    'Sharing office',
    'Fully furnished office',
    'Farm house',
    'Apartment',
    'Mall Shop On Rent',
    'Villa',
    'Independent House',
    'Residential Plot',
    'Bungalow',
    'Paying Guest',
  ],
  appliances: ['Kitchen appliances', 'Hotel appliances', 'Office appliances', 'Electronic appliances', 'Others'],
  usedVehicle: ['2 wheeler', 'Auto', 'Car', 'Mini Truck', 'EV', 'Spare parts', 'Others'],
  d2h: ['Connection', 'Service', 'Spares', 'Others'],
  misc: ['Books', 'Sports', 'Gym', 'Musical Instruments', 'Others'],
};

export const MarketProductsOptions = Object.entries(MarketProducts).reduce(
  (a, [k, v]) => ({ ...a, [k]: optionsFromStrings(v) }),
  {} as { [key in MarketGroupIdType]: SelectItem[] },
);

const TermOptions: SelectItem[] = [
  { id: 'negotiable', item: 'Negotiable' },
  { id: 'nonNegotiable', item: 'Non-negotiable' },
  { id: 'priceOnRequest', item: 'Price on request' },
];

const conditionOptions: SelectItem[] = [
  { id: 'unused', item: 'Unused' },
  { id: 'used', item: 'Used' },
  { id: 'organic', item: 'Organic' },
  { id: 'refurbished', item: 'Refurbished' },
  { id: 'new', item: 'New (Packed)' },
];

const marketFormSections = {
  market: {
    form: ['market'],
  },
  'market-desc': {
    form: ['description'],
  },
  'market-image': {
    document: ['images'],
  },
} as const;

export const MarketForm: FormSectionGroup<typeof marketFormSections> = {
  market: {
    form: [
      {
        id: 'market',
        title: 'Market feed',
        noHeader: true,
        items: [
          {
            id: 'country',
            label: 'Country',
            type: 'select',
            block: true,
            options: CountriesOptionWithFlag,
            placeholder: 'Select Country',
          },
          {
            id: 'group',
            label: 'Group',
            type: 'select-submenu',
            block: true,
            options: MarketGroups,
            placeholder: 'Select Market',
            optionsSub: MarketProductsOptions,
            sub: {
              id: 'products',
              label: 'Product',
              placeholder: 'Select Product',
            },
          },
          {
            id: 'title',
            label: 'Title',
            type: 'text',
            block: true,
            placeholder: 'Enter title',
          },
          {
            id: 'terms',
            label: 'Terms',
            type: 'select',
            block: true,
            options: TermOptions,
            placeholder: 'Select Terms',
          },
          {
            id: 'condition',
            label: 'Condition',
            type: 'select',
            block: true,
            options: conditionOptions,
            placeholder: 'Select Condition',
          },
          {
            id: 'price',
            label: 'Price',
            type: 'number',
            block: true,
            placeholder: 'Enter price',
          },
          {
            id: 'pin-code',
            label: 'Zip-code/Pin-code',
            type: 'number',
            block: true,
            placeholder: 'Enter pin code',
          },
          {
            id: 'area',
            label: 'Area',
            type: 'text',
            block: true,
            placeholder: 'Enter area',
          },
        ],
      },
    ],
  },
  'market-desc': {
    form: [
      {
        id: 'description',
        title: 'Description',
        noHeader: true,
        items: [
          {
            id: 'description',
            label: 'Description',
            placeholder: 'Description (max 250 characters)',
            type: 'area',
          },
        ],
      },
    ],
  },
  'market-image': {
    document: [
      {
        id: 'images',
        title: 'Images',
        noHeader: true,
        items: [
          {
            id: 'image-1',
            label: 'Image 1',
          },
          {
            id: 'image-2',
            label: 'Image 2',
          },
          {
            id: 'image-3',
            label: 'Image 3',
          },
        ],
      },
    ],
  },
};
