'use client';

import { CountryFlag, CountryName } from '@li/config/options';
import { withCondition, withConditionCase } from '@li/design/enhancers';
import { SwitchArrows } from '@li/design/icons';
import { CountryCode } from '@li/types/config';
import { getRandomImagesArray } from '@md/blaunk/config';
import { QuantityType } from '@md/blaunk/types';
import clsx from 'clsx';
import { useState } from 'react';
import { SelectedItem } from './SelectedItem';
import tableStyles from './table.module.css';

export type TData = {
  id: string;
  article: string;
  brand: string;
  city: string;
  company: string;
  country: CountryCode;
  date: string;
  group: string;
  images: string[];
  itemCode: string;
  membership: string;
  name: string;
  origin: string;
  price: number;
  priceList: QuantityType[];
  quantity: number;
  rating: number;
  reviews: number;
  state: string;
  type: string;
  vendorId: string;
};

const columns = [
  { id: 'date', name: 'Date' },
  { id: 'country', name: 'Country' },
  { id: 'vendorId', name: 'Vendor ID' },
  { id: 'city', name: 'City' },
  { id: 'group', name: 'Group' },
  { id: 'article', name: 'Article' },
  { id: 'brand', name: 'Brand' },
  { id: 'type', name: 'Type' },
  { id: 'quantity', name: 'Quantity' },
  { id: 'price', name: 'Price' },
  // { id: 'membership', name: 'Membership' },
] as const;

const dummy: TData = {
  id: 'id',
  article: 'Article',
  brand: 'Brand',
  city: 'City',
  company: 'Chordia',
  country: 'in',
  date: '12 feb 2024',
  group: 'Group',
  images: getRandomImagesArray(4)(600, 600, 'clothes'),
  itemCode: 'ItemCode',
  membership: 'membership',
  name: 'Product name',
  origin: 'India',
  price: 100,
  quantity: 100,
  rating: 4,
  reviews: 100,
  state: 'Maharashtra',
  type: 'Manufacturer',
  vendorId: 'vendorId',
  priceList: [
    { id: '1', quantity: 1, price: 100, priceDollar: 1.0 },
    { id: '10', quantity: 10, price: 90, priceDollar: 0.9 },
    { id: '100', quantity: 100, price: 80, priceDollar: 0.8 },
    { id: '1000', quantity: 1000, price: 75, priceDollar: 0.75 },
  ],
};

export type CurrencyType = '₹' | '$';
const mockData: TData[] = new Array(10).fill(dummy);

export const SearchTable = () => {
  const [selected, setSelected] = useState<number>();
  const [currency, setCurrency] = useState<CurrencyType>('₹');

  return (
    <div className={tableStyles['table-wrapper']}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <td></td>
            {columns.map((c) => (
              <td key={c.id} className={tableStyles.header}>
                {withConditionCase(c.id)({
                  price: (
                    <div className={tableStyles['price-header']}>
                      Price {currency} (
                      <SwitchArrows
                        onClick={() =>
                          setCurrency(currency === '₹' ? '$' : '₹')
                        }
                        className={'clickable'}
                        width={16}
                        height={16}
                      />
                      )
                    </div>
                  ),
                  default: c.name,
                })}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((d, i) => (
            <>
              <tr key={i}>
                <td
                  className={clsx(tableStyles['row-open'], 'clickable')}
                  onClick={() =>
                    selected === i ? setSelected(undefined) : setSelected(i)
                  }
                >
                  {withCondition(selected === i)('-', '+')}
                </td>
                {columns.map(({ id }) => (
                  <td key={`${id}-${d.id}`}>
                    {withCondition(id === 'country')(
                      <div className={tableStyles['country-cell']}>
                        {CountryFlag[d.country]?.Flag}
                        {CountryName[d.country]}
                      </div>,
                      d[id],
                    )}
                  </td>
                ))}
              </tr>
              {withCondition(selected === i)(
                <tr>
                  <td></td>
                  <td colSpan={columns.length}>
                    <SelectedItem data={d} currency={currency} />
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
