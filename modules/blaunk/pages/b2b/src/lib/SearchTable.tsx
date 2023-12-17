'use client';
import { Table, TableColumn } from '@li/design/elements';
import styles from './search.module.css';

type TData = {
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
  membership: string;
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
const mockData: TData[] = new Array(10).fill({
  date: 1702818046082,
  country: 'country',
  vendorId: 'vendorId',
  city: 'city',
  group: 'group',
  article: 'article',
  itemCode: 'itemCode',
  brand: 'brand',
  type: 'type',
  quantity: 100,
  price: 100,
  membership: 'membership',
});

export const SearchTable = () => {
  return (
    <Table
      data={mockData}
      columns={columns}
      onRowClick={() => {}}
      className={styles['search-table']}
    />
  );
};
