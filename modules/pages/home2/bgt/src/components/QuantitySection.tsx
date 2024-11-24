'use client';

import { gs } from '@li/config/design';
import { limitDecimal } from '@li/config/utils';
import { Button, Labeled, Table, TableColumn } from '@li/design/elements';
import { CircleEmpty, CircleFilled } from '@li/design/icons';
import { DetailsTable } from '@md/blaunk/pages/home';
import { QuantityType } from '@md/blaunk/types';
import { useMemo, useState } from 'react';
import { CurrencyType } from './SearchTable';
import styles from './selected-item.module.css';

export const defaultQty = (): QuantityType => ({
  id: `${+new Date()}`,
  price: undefined,
  priceDollar: undefined,
  quantity: undefined,
});

const columns = (onSelect: (data: string) => void, selected?: string): TableColumn<QuantityType>[] => [
  {
    id: 'id',
    name: '',
    cellFormat: (cellData) =>
      cellData ? (
        cellData === selected ? (
          <CircleFilled color="var(--primary)" width={20} height={20} className={gs.clickable} />
        ) : (
          <CircleEmpty
            color="var(--primary)"
            width={20}
            height={20}
            className={gs.clickable}
            onClick={() => onSelect(cellData as string)}
          />
        )
      ) : null,
  },
  {
    id: 'quantity',
    name: 'Quantity',
  },
  {
    id: 'price',
    name: 'Price(₹)',
    cellFormat: (cellData) => (cellData ? `₹${cellData}` : ''),
  },
  {
    id: 'priceDollar',
    name: 'Price($)',
    cellFormat: (cellData) => (cellData ? `$${cellData}` : ''),
  },
];

type Props = {
  title: string;
  data: QuantityType[];
  currency: CurrencyType;
};

const limit = limitDecimal(2);

export const OrderEstimate = ({ data, title, currency }: Props) => {
  const [quantity, setQuantity] = useState<string>(data[0].id);

  const selectedQuantity = useMemo(() => data.find((d) => d.id === quantity), [data, quantity]);

  const price = useMemo(() => (selectedQuantity?.price || 0) * (selectedQuantity?.quantity || 0), [selectedQuantity]);

  return (
    <div>
      <Labeled label={title} className={styles.quantity}>
        <Table columns={columns(setQuantity, quantity)} data={data} className={styles.table} />
      </Labeled>
      <div className={styles.tariff}>
        <DetailsTable
          className={styles['estimate-table']}
          data={[
            ['Value', limit(price)],
            ['Tax', limit(price * 0.18)],
            ['Commission', limit(price * 0.025)],
            ['Insurance', limit(price * 0.0)],
            ['Logistics', limit(price * 0.0)],
            ['Packing', limit(price * 0.0)],
            ['Rebate', limit(price * 0.0)],
            ['Bank charges', limit(price * 0.0)],
            ['Total', limit(price * 1.26)],
          ]}
        />
      </div>
      <Button className={styles['tariff-submit']}>Submit</Button>
    </div>
  );
};
