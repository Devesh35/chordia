'use client';

import { Labeled, PageHeader, Select } from '@li/design/elements';
import { ProductTypeOptions } from '@md/blaunk/config';
import { ProductPayment, ProductStatus } from '@md/blaunk/types';
// import { OrderItem } from './components/OrderItem';
import { LogisticsOrderBook } from '@md/blaunk/pages/vendor';
import { useState } from 'react';
import OrderBook from './components/OrderBook';
import styles from './order.module.css';

export type OrderItemType = {
  id: string;
  image: string;
  name: string;
  date: string;
  orderStatus: string;
  qrCode: string;
  otp: string;
  rating: number;
  review: string;
  payment: ProductPayment;
  status: ProductStatus;
  dateTime: Date;
  verifyOtp: string;
};

// const mockItems: OrderItemType[] = getRandomImagesArray(4)(
//   300,
//   300,
//   'clothes',
// ).map((src, i) => ({
//   id: `${i}`,
//   image: src,
//   date: '24-2-24',
//   orderStatus: 'Pending',
//   qrCode: '',
//   otp:'1234',
//   name: 'Vendor name',
//   rating: 4,
//   review: 'Good',
//   payment: 'received',
//   status: 'delivered',
//   dateTime: new Date(),
//   verifyOtp: '1234',
// }));

export const Order = () => {
  const [selected, setSelected] = useState<string>();

  return (
    <div className={styles.wrapper}>
      <PageHeader title={'My orders'} />
      <Labeled label="Select product type to view:" inline className={styles['select-type']}>
        <Select options={ProductTypeOptions} onChange={(value) => setSelected(value?.id)} />
      </Labeled>
      {/* {mockItems.map((item) => (
        <OrderItem item={item} />
      ))} */}
      {selected === 'logistics' ? <LogisticsOrderBook /> : <OrderBook />}
    </div>
  );
};
