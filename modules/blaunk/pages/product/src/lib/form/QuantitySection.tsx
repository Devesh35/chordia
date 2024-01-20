'use client';

import {
  Button,
  FormFormSection,
  Input,
  Labeled,
  Modal,
  Table,
  TableColumn,
} from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { gs } from '@li/config/design';
import styles from './bgt.module.css';
import { FormEventHandler, useState } from 'react';
import { QuantityType } from './BGT';

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
  onChange,
}: {
  data: QuantityType[];
  onChange: (data: QuantityType[]) => void;
}) => {
  const [quantity, setQuantity] = useState<QuantityType[]>(() => getData(data));
  const [qty, setQty] = useState<QuantityType>(defaultQty());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateQty = (id: keyof QuantityType) => (val: number) => {
    setQty((prev) => ({ ...prev, [id]: val }));
    if (id === 'price') setQty((prev) => ({ ...prev, priceDollar: val / 80 }));
  };

  const onClose = () => {
    setQty(defaultQty());
    setIsModalOpen(false);
  };

  const addQuantity: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!qty.qty || !qty.price) return;
    setQuantity((prev) => {
      const newData = getData([...prev, { ...qty }]);
      onChange(newData.filter((item) => item.qty));
      return newData;
    });
    onClose();
  };

  const onDelete = (id: string) => {
    setQuantity((prev) => getData(prev.filter((item) => item.id !== id)));
  };

  return (
    <FormFormSection title="Product pricing">
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
              placeholder=""
              prefix="₹"
              required
              onChange={(e) => updateQty('price')(+e.target.value)}
            />
          </Labeled>
          <Button className={styles.submit} type="submit">
            Add
          </Button>
        </form>
      </Modal>
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
    </FormFormSection>
  );
};
