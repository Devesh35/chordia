'use client';

import {
  Button,
  Input,
  Labeled,
  Modal,
  Select,
  Table,
  TableColumn,
} from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { gs } from '@li/config/design';
import styles from './bgt.module.css';
import { FormEventHandler, useState } from 'react';
import { VoucherType } from './Tour';
import { RoomTypesOptions } from '@md/blaunk/config';

export const defaultRoom = (): VoucherType => ({
  id: `${+new Date()}`,
  voucherType: undefined,
  value: undefined,
  discount: undefined,
});

const columns = (
  onDelete: (data: string) => void,
): TableColumn<VoucherType>[] => [
  {
    id: 'voucherType',
    name: 'Voucher Type',
  },
  {
    id: 'value',
    name: 'Value(₹)',
    cellFormat: (cellData) => (cellData ? `₹${cellData}` : ''),
  },
  {
    id: 'discount',
    name: 'Discount(%)',
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

const getData = (data: VoucherType[]) => {
  const d = [...data].filter((p) => p.voucherType);
  while (d.length < 2) d.push(defaultRoom());
  d.push(defaultRoom());
  return d;
};

export const RoomsSection = ({
  data,
  onChange,
}: {
  data: VoucherType[];
  onChange?: (data: VoucherType[]) => void;
}) => {
  const [rooms, setRooms] = useState<VoucherType[]>(() => getData(data));
  const [room, setRoom] = useState<VoucherType>(defaultRoom());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateRoom =
    <K extends keyof VoucherType>(id: K) =>
    (val: VoucherType[K]) => {
      setRoom((prev) => ({ ...prev, [id]: val }));
    };

  const onClose = () => {
    setRoom(defaultRoom());
    setIsModalOpen(false);
  };

  const addRooms: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!room.voucherType || !room.value || !room.discount) return;
    setRooms((prev) => {
      const newData = getData([...prev, { ...room }]);
      onChange?.(newData.filter((item) => item.voucherType));
      return newData;
    });
    onClose();
  };

  const onDelete = (id: string) => {
    setRooms((prev) => getData(prev.filter((item) => item.id !== id)));
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose} title={'Add rooms'}>
        <form onSubmit={addRooms}>
          <Labeled label="Voucher code">
            <Select
              placeholder="Code"
              options={RoomTypesOptions}
              onChange={(e) => updateRoom('voucherType')(e?.item?.toString())}
            />
          </Labeled>
          <Labeled label={'Book value(₹)'}>
            <Input
              type="number"
              placeholder=""
              prefix="₹"
              required
              onChange={(e) => updateRoom('value')(+e.target.value)}
            />
          </Labeled>
          <Labeled label={'Discount'}>
            <Input
              type="number"
              placeholder=""
              prefix="$"
              required
              onChange={(e) => updateRoom('discount')(+e.target.value)}
            />
          </Labeled>
          <Button className={styles.submit} type="submit">
            Add
          </Button>
        </form>
      </Modal>
      <div className={styles.rooms}>
        <Table
          columns={columns(onDelete)}
          data={rooms}
          className={styles.table}
        />
        <Button
          className={styles['add-row-button']}
          onClick={() => setIsModalOpen(true)}
        >
          Add rooms
        </Button>
      </div>
    </>
  );
};
