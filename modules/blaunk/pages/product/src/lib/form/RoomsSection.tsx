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
import { RoomType } from './Tour';
import { RoomTypesOptions } from '@md/blaunk/config';

export const defaultRoom = (): RoomType => ({
  id: `${+new Date()}`,
  roomType: undefined,
  mrp: undefined,
  pos: undefined,
});

const columns = (onDelete: (data: string) => void): TableColumn<RoomType>[] => [
  {
    id: 'roomType',
    name: 'Room & Guest',
  },
  {
    id: 'mrp',
    name: 'MRP(₹)',
    cellFormat: (cellData) => (cellData ? `₹${cellData}` : ''),
  },
  {
    id: 'pos',
    name: 'POS($)',
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

const getData = (data: RoomType[]) => {
  const d = [...data].filter((p) => p.roomType);
  while (d.length < 2) d.push(defaultRoom());
  d.push(defaultRoom());
  return d;
};

export const RoomsSection = ({
  data,
  onChange,
}: {
  data: RoomType[];
  onChange?: (data: RoomType[]) => void;
}) => {
  const [rooms, setRooms] = useState<RoomType[]>(() => getData(data));
  const [room, setRoom] = useState<RoomType>(defaultRoom());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateRoom =
    <K extends keyof RoomType>(id: K) =>
    (val: RoomType[K]) => {
      setRoom((prev) => ({ ...prev, [id]: val }));
    };

  const onClose = () => {
    setRoom(defaultRoom());
    setIsModalOpen(false);
  };

  const addRooms: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!room.roomType || !room.mrp || !room.pos) return;
    setRooms((prev) => {
      const newData = getData([...prev, { ...room }]);
      onChange?.(newData.filter((item) => item.roomType));
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
          <Labeled label="Rooms">
            <Select
              placeholder="Room."
              options={RoomTypesOptions}
              onChange={(e) => updateRoom('roomType')(e?.item?.toString())}
            />
          </Labeled>
          <Labeled label={'Price(₹)'}>
            <Input
              type="number"
              placeholder=""
              prefix="₹"
              required
              onChange={(e) => updateRoom('mrp')(+e.target.value)}
            />
          </Labeled>
          <Labeled label={'Price($)'}>
            <Input
              type="number"
              placeholder=""
              prefix="$"
              required
              onChange={(e) => updateRoom('pos')(+e.target.value)}
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
