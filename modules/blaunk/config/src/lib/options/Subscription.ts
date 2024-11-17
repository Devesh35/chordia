import { randomImageUrl } from '../utils';
import { ProductTypeOptions } from './Product';

export type SubscriptionStatus = 'active' | 'pending' | 'expired' | 'inactive' | 'disabled';

export const subscriptionMenuOptions = ProductTypeOptions;
export const subscriptionConfig = {
  // bgt: {
  //   id: 'bgt',
  //   name: 'BGT',
  //   icon: randomImageUrl(96),
  //   items: [
  //     {
  //       category: 'All',
  //       options: [{ page: 1, fee: 0 }],
  //     },
  //   ],
  // },
  // boutique: {
  //   id: 'boutique',
  //   name: 'Boutique',
  //   icon: randomImageUrl(96),
  //   items: [
  //     {
  //       category: 'All',
  //       options: [{ page: 1, fee: 0 }],
  //     },
  //   ],
  // },
  cake: {
    id: 'cake',
    name: 'Cake',
    icon: randomImageUrl(96),
    items: [
      {
        category: 'All',
        options: [{ page: 1, fee: 0 }],
      },
      {
        category: 'Cake 1',
        options: [{ page: 1, fee: 100 }],
      },
      {
        category: 'Cake 2',
        options: [
          { page: 1, fee: 100 },
          { page: 2, fee: 100 },
          { page: 3, fee: 100 },
        ],
      },
    ],
  },
  store: {
    id: 'store',
    name: 'Store',
    icon: randomImageUrl(96),
    items: [
      {
        category: 'All',
        options: [
          { page: 5, fee: 500 },
          { page: 10, fee: 1000 },
          { page: 20, fee: 2000 },
          { page: 30, fee: 3000 },
          { page: 40, fee: 4000 },
        ],
      },
    ],
  },
  tour: {
    id: 'tour',
    name: 'Tour',
    icon: randomImageUrl(96),
    items: [
      {
        category: 'Banquet Hall',
        options: [{ page: 1, fee: 6000 }],
      },
      { category: 'Luxury', options: [{ page: 1, fee: 6000 }] },
      {
        category: 'Lodging',
        options: [
          { page: 1, fee: 4000 },
          { page: 2, fee: 5000 },
          { page: 3, fee: 6000 },
        ],
      },
      { category: 'Event', options: [{ page: 1, fee: 4000 }] },
      { category: 'Hotel', options: [{ page: 1, fee: 4000 }] },
      { category: 'Studio', options: [{ page: 1, fee: 5000 }] },
      { category: 'Resort', options: [{ page: 1, fee: 5000 }] },
      { category: 'Day Out', options: [{ page: 1, fee: 5000 }] },
      {
        category: 'Package Tour',
        options: [{ page: 1, fee: 5000 }],
      },
    ],
  },
  requirement: {
    id: 'requirement',
    name: 'Requirement',
    icon: randomImageUrl(96),
    items: [
      {
        category: 'All',
        options: [
          { page: 1, fee: 100 },
          { page: 3, fee: 275 },
          { page: 6, fee: 500 },
        ],
      },
    ],
    ui: {
      Listing: 'Validity (months)',
    },
  },
} as const;
