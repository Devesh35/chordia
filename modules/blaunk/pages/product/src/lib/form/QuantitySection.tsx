'use client';

import {
  Button,
  FormSection,
  Input,
  Labeled,
  Modal,
  Table,
  TableColumn,
} from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { gs } from '@li/config/design';
import styles from './bgt.module.css';
import { useState } from 'react';

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

export const QuantitySection = ({ data }: { data: QuantityType[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FormSection title="Product pricing">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={'Add quantity'}
        actions={<Button>Add</Button>}
      >
        <Labeled label="Quantity">
          <Input type="number" placeholder="1" />
        </Labeled>
        <Labeled label={'Price(₹)'}>
          <Input type="number" placeholder="0" />
        </Labeled>
      </Modal>
      <div className={styles.quantity}>
        <Table columns={columns} data={data} className={styles.table} />
        <Button
          className={styles['add-row-button']}
          onClick={() => setIsModalOpen(true)}
        >
          Add quantity
        </Button>
      </div>
    </FormSection>
  );
};
