'use client';

import { gs } from '@li/config/design';
import { Button, Labeled, Table, TableColumn } from '@li/design/elements';
import { CircleEmpty, CircleFilled } from '@li/design/icons';
import { QuantityType } from '@md/blaunk/types';
import { useMemo, useState } from 'react';
import styles from './selected-item.module.css';

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

export const QuantitySection = ({
  data,
  title,
}: {
  title: string;
  data: QuantityType[];
}) => {
  const [quantity, setQuantity] = useState<string>();

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
        <div>
          <span>Value</span>
          <span>{selectedQuantity?.price}</span>
        </div>
        <div>
          <span>Commission</span>
          <span>25</span>
        </div>
        <div>
          <span>Tax</span>
          <span>51</span>
        </div>
        <div>
          <span>Logistics</span>
          <span>10</span>
        </div>
        <div>
          <span>Rebate</span>
          <span>10</span>
        </div>
        <div>
          <span>Bank charges</span>
          <span>10</span>
        </div>
        <div>
          <span>Total</span>
          <span>100</span>
        </div>
      </div>
      <Button className={styles['tariff-submit']}>Submit</Button>
    </div>
  );
};
