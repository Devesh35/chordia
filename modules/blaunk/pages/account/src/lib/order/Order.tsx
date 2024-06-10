import { Labeled, PageHeader, Select } from '@li/design/elements';
import { ProductTypeOptions, getRandomImagesArray } from '@md/blaunk/config';
import { ProductStatus } from '@md/blaunk/types';
import { OrderItem } from './components/OrderItem';
import styles from './order.module.css';

export type OrderItemType = {
  id: string;
  image: string;
  name: string;
  date: string;
  rating: number;
  review: string;
  status: ProductStatus;
};

const mockItems: OrderItemType[] = getRandomImagesArray(4)(
  300,
  300,
  'clothes',
).map((src, i) => ({
  id: `${i}`,
  image: src,
  date: '24-2-24',
  name: 'Vendor name',
  rating: 4,
  review: 'Good',
  status: 'delivered',
}));

export const Order = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader title={'My orders'} />
      <Labeled
        label="Select product type to view:"
        inline
        className={styles['select-type']}
      >
        <Select options={ProductTypeOptions} />
      </Labeled>
      {mockItems.map((item) => (
        <OrderItem item={item} />
      ))}
    </div>
  );
};
