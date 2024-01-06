'use client';

import { Table, TableColumn } from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { gs } from '@li/config/design';
import styles from './bgt.module.css';

type QuantityType = {
  qty: number;
  price: number;
  priceDollar: number;
};

const columns: TableColumn<QuantityType>[] = [
  {
    id: 'qty',
    name: 'Quantity',
  },
  {
    id: 'price',
    name: 'Price(₹)',
    cellFormat: (cellData) => `₹${cellData}`,
  },
  {
    id: 'priceDollar',
    name: 'Price($)',
    cellFormat: (cellData) => `$${cellData}`,
  },
  {
    id: 'action',
    name: '',
    cellFormat: () => (
      <CircleClose fill="var(--gray400)" className={gs.clickable} />
    ),
  },
];

export const QuantityTable = ({ data }: { data: QuantityType[] }) => {
  return <Table columns={columns} data={data} className={styles.table} />;
};
