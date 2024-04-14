'use client';

import { gs } from '@li/config/design';
import {
  Button,
  FormSectionHeader,
  Input,
  Labeled,
  Modal,
  Table,
  TableColumn,
} from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { FormEventHandler, useCallback, useState } from 'react';
import { QuantityType } from './BGT';
import styles from './bgt.module.css';

export const defaultQty = (): QuantityType => ({
  id: `${+new Date()}`,
  price: undefined,
  priceDollar: undefined,
  qty: undefined,
});

const columns = (
  onDelete: (data: string) => void,
): TableColumn<QuantityType>[] => [
  {
    id: 'qty',
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
  {
    id: 'id',
    name: '',
    cellFormat: (cellData) =>
      cellData ? (
        <CircleClose
          fill="var(--gray400)"
          className={gs.clickable}
          onClick={() => onDelete(cellData as string)}
        />
      ) : (
        <CircleClose fill="var(--gray100)" />
      ),
  },
];

const getData = (data: QuantityType[]) => {
  const d = [...data].filter((p) => p.qty);
  while (d.length < 2) d.push(defaultQty());
  d.push(defaultQty());
  return d;
};

export const QuantitySection = ({
  data,
  title,
  onChange,
}: {
  title: string;
  data: QuantityType[];
  onChange: (data: QuantityType[]) => void;
}) => {
  const [quantity, setQuantity] = useState<QuantityType[]>(() => getData(data));
  const [qty, setQty] = useState<QuantityType>(defaultQty());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateQty = (id: keyof QuantityType) => (val: number) => {
    setQty((prev) => ({ ...prev, [id]: val }));
    // if (id === 'price') setQty((prev) => ({ ...prev, priceDollar: val / 80 }));
  };

  const onClose = () => {
    setQty(defaultQty());
    setIsModalOpen(false);
  };

  const addQuantity: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (!qty.qty || !qty.price || !qty.priceDollar) return;
      const newData = getData([...quantity, { ...qty }]);
      setQuantity(newData);
      onChange(newData.filter((item) => item.qty));
      onClose();
    },
    [onChange, qty, quantity],
  );

  const onDelete = (id: string) => {
    setQuantity((prev) => getData(prev.filter((item) => item.id !== id)));
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose} title={'Add quantity'}>
        <form onSubmit={addQuantity}>
          <Labeled label="Quantity">
            <Input
              type="number"
              placeholder="Qty."
              required
              onChange={(e) => updateQty('qty')(+e.target.value)}
            />
          </Labeled>
          <Labeled label={'Price(₹)'}>
            <Input
              type="number"
              prefix="₹"
              required
              onChange={(e) => updateQty('price')(+e.target.value)}
            />
          </Labeled>
          <Labeled label={'Price($)'}>
            <Input
              type="number"
              prefix="$"
              required
              onChange={(e) => updateQty('priceDollar')(+e.target.value)}
            />
          </Labeled>
          <Button className={styles.submit} type="submit">
            Add
          </Button>
        </form>
      </Modal>
      <FormSectionHeader title={title} />

      <div className={styles.quantity}>
        <Table
          columns={columns(onDelete)}
          data={quantity}
          className={styles.table}
        />
        <Button
          className={styles['add-row-button']}
          onClick={() => setIsModalOpen(true)}
        >
          Add quantity
        </Button>
      </div>
    </>
  );
};
