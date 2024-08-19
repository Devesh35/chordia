import { optionsFromStrings } from '@li/config/utils';
import { SelectItem } from '@li/types/design';

type SubscriptionType = 'advertisement' | 'blaunkDial' | 'marketFeed';

export const SubscriptionOptions: SelectItem<SubscriptionType>[] = [
  { id: 'advertisement', item: 'Advertisement' },
  { id: 'blaunkDial', item: 'Blaunk Dial' },
  { id: 'marketFeed', item: 'Market Feed' },
];

type PlanSelectItem = SelectItem & {
  value: number;
  duration: { years?: number; months?: number };
};

export const SubscriptionPlanOptions: {
  [key in SubscriptionType]: PlanSelectItem[];
} = {
  advertisement: [
    {
      id: 'premium-1YValidity',
      item: 'Premium - 1Y Validity',
      value: 1999,
      duration: { years: 1 },
    },
    {
      id: 'platinum-1YValidity',
      item: 'Platinum - 1Y Validity',
      value: 999,
      duration: { years: 1 },
    },
    {
      id: 'gold-6MValidity',
      item: 'Gold - 6M Validity',
      value: 800,
      duration: { months: 6 },
    },
    {
      id: 'silver-3MValidity',
      item: 'Silver - 3M Validity',
      value: 500,
      duration: { months: 3 },
    },
  ],
  blaunkDial: [
    {
      id: 'premium-1YValidity',
      item: 'Premium - 1Y Validity',
      value: 1999,
      duration: { years: 1 },
    },
    {
      id: 'platinum-1YValidity',
      item: 'Platinum - 1Y Validity',
      value: 999,
      duration: { years: 1 },
    },
    {
      id: 'gold-6MValidity',
      item: 'Gold - 6M Validity',
      value: 800,
      duration: { months: 6 },
    },
    {
      id: 'silver-3MValidity',
      item: 'Silver - 3M Validity',
      value: 500,
      duration: { months: 3 },
    },
  ],
  marketFeed: [
    {
      id: 'premium-2MValidity',
      item: 'Premium - 2M Validity',
      value: 500,
      duration: { months: 2 },
    },
    {
      id: 'standard-2MValidity',
      item: 'Standard - 2M Validity',
      value: 300,
      duration: { months: 2 },
    },
  ],
};

export const AdvertisementTypeOptions = [
  { id: 'homePage', item: 'Home Page' },
  { id: 'bgt', item: 'BGT' },
  { id: 'tour', item: 'Tour' },
  { id: 'cake', item: 'Cake' },
  { id: 'store', item: 'Store' },
  { id: 'boutique', item: 'Boutique' },
];

export const AdvertisementSubTypeOptions = {
  homePage: optionsFromStrings([
    'Business Card',
    'Slider',
    'Category',
    'Deal & Offer',
    'Explore',
  ]),
  bgt: optionsFromStrings(['Running ad', 'Slider']),
  tour: optionsFromStrings(['Deal & Offer', 'Explore']),
  cake: optionsFromStrings(['Deal & Offer', 'Explore']),
  store: optionsFromStrings(['Deal & Offer', 'Explore', 'Business Card']),
  boutique: optionsFromStrings([
    "Women's collection",
    "Men's collection",
    'Style on rent',
    'Deal & Offer',
    'Explore',
    'Indian Celebrity Designer',
    'International Celebrity Designer',
  ]),
};
