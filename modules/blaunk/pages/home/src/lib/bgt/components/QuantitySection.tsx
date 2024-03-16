'use client';

import { gs } from '@li/config/design';
import { Button, Labeled, Table, TableColumn } from '@li/design/elements';
import { CircleEmpty, CircleFilled } from '@li/design/icons';
import { QuantityType } from '@md/blaunk/types';
import { useMemo, useState } from 'react';
import styles from './selected-item.module.css';
import { DetailsTable } from '../../components';

export const defaultQty = (): QuantityType => ({
  id: `${+new Date()}`,
  price: undefined,
  priceDollar: undefined,
  quantity: undefined,
});

const columns = (
  onSelect: (data: string) => void,
  selected?: string,
): TableColumn<QuantityType>[] => [
  {
    id: 'id',
    name: '',
    cellFormat: (cellData) =>
      cellData ? (
        cellData === selected ? (
          <CircleFilled
            color="var(--primary)"
            width={20}
            height={20}
            className={gs.clickable}
          />
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

export const OrderEstimate = ({
  data,
  title,
}: {
  title: string;
  data: QuantityType[];
}) => {
  const [quantity, setQuantity] = useState<string>(data[0].id);

  const selectedQuantity = useMemo(
    () => data.find((d) => d.id === quantity),
    [data, quantity],
  );

  return (
    <div>
      <Labeled label={title} className={styles.quantity}>
        <Table
          columns={columns(setQuantity, quantity)}
          data={data}
          className={styles.table}
        />
      </Labeled>
      <div className={styles.tariff}>
        <DetailsTable
          data={[
            ['Value', `Rs ${selectedQuantity?.price || 0}`],
            ['Commission', `Rs ${25}`],
            ['Tax', `Rs ${51}`],
            ['Logistics', `Rs ${10}`],
            ['Rebate', `Rs ${10}`],
            ['Bank charges', `Rs ${10}`],
            ['Total', `Rs ${100}`],
          ]}
        />
      </div>
      <Button className={styles['tariff-submit']}>Submit</Button>
    </div>
  );
};
