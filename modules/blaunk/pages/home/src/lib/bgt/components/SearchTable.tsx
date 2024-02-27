'use client';
import { TableColumn } from '@li/design/elements';
import styles from './search.module.css';
import tableStyles from './table.module.css';
import { getRandomImagesArray } from '@md/blaunk/config';
import { QuantityType } from '@md/blaunk/types';
import { useState } from 'react';
import { SelectedItem } from './SelectedItem';
import { withCondition } from '@li/design/enhancers';

export type TData = {
  id: string;
  name: string;
  date: number;
  country: string;
  vendorId: string;
  city: string;
  group: string;
  article: string;
  itemCode: string;
  brand: string;
  type: string;
  quantity: number;
  price: number;
  priceList: QuantityType[];
  membership: string;
  rating: number;
  images: string[];
  reviews: number;
  origin: string;
  state: string;
};

const columns: TableColumn<TData>[] = [
  { id: 'date', name: 'Date' },
  { id: 'country', name: 'Country' },
  { id: 'vendorId', name: 'Vendor ID' },
  { id: 'city', name: 'City' },
  { id: 'group', name: 'Group' },
  { id: 'article', name: 'Article' },
  { id: 'itemCode', name: 'Item Code' },
  { id: 'brand', name: 'Brand' },
  { id: 'type', name: 'Type' },
  { id: 'quantity', name: 'Quantity' },
  { id: 'price', name: 'Price' },
  { id: 'membership', name: 'Membership' },
];

const dummy: TData = {
  id: 'id',
  date: 1702818046082,
  country: 'IN',
  vendorId: 'vendorId',
  city: 'city',
  group: 'group',
  article: 'article',
  itemCode: 'itemCode',
  brand: 'brand',
  type: 'Manufacturer',
  rating: 4,
  quantity: 100,
  price: 100,
  membership: 'membership',
  name: 'Product name',
  images: getRandomImagesArray(4)(600, 600, 'clothes'),
  origin: 'India',
  state: 'Maharashtra',
  reviews: 100,
  priceList: [
    { id: '1', quantity: 1, price: 100, priceDollar: 1.0 },
    { id: '10', quantity: 10, price: 90, priceDollar: 0.9 },
    { id: '100', quantity: 100, price: 80, priceDollar: 0.8 },
    { id: '1000', quantity: 1000, price: 75, priceDollar: 0.75 },
  ],
};

const mockData: TData[] = new Array(10).fill(dummy);

export const SearchTable = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <div>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th></th>
            {columns.map((c) => (
              <td key={c.id} className={styles.header}>
                {c.name}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((d, i) => (
            <>
              <tr key={i}>
                <td
                  className={styles['row-open']}
                  onClick={() => setSelected(i)}
                >
                  +
                </td>
                {columns.map(({ id }) => (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignoreF
                  <td key={`${id}-${d.id}`}>{d[id]}</td>
                ))}
              </tr>
              {withCondition(selected === i)(
                <tr>
                  <td></td>
                  <td colSpan={columns.length}>
                    <SelectedItem data={d} />
                  </td>
                </tr>,
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
