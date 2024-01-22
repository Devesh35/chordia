import { ProductTypeOptions, productType } from './Product';

export type Cat = Record<
  Lowercase<(typeof productType)[number]>,
  {
    category: string;
    options: {
      page: number;
      fee: number;
    }[];
  }[]
>;
export const subscriptionMenuOptions = ProductTypeOptions;
export const subscriptionConfig = {
  bgt: [
    {
      category: 'All',
      options: [{ page: 1, fee: 0 }],
    },
  ],
  boutique: [
    {
      category: 'All',
      options: [{ page: 1, fee: 0 }],
    },
  ],
  cake: [
    {
      category: 'All',
      options: [{ page: 1, fee: 0 }],
    },
  ],
  store: [
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
  tour: [
    { category: 'Banquet Hall', options: [{ page: 1, fee: 6000 }] },
    { category: 'Luxury', options: [{ page: 1, fee: 6000 }] },
    { category: 'Lodging', options: [{ page: 1, fee: 4000 }] },
    { category: 'Event', options: [{ page: 1, fee: 4000 }] },
    { category: 'Hotel', options: [{ page: 1, fee: 4000 }] },
    { category: 'Studio', options: [{ page: 1, fee: 5000 }] },
    { category: 'Resort', options: [{ page: 1, fee: 5000 }] },
    { category: 'Day Out', options: [{ page: 1, fee: 5000 }] },
    { category: 'Package Tour', options: [{ page: 1, fee: 5000 }] },
  ],
} as const;
