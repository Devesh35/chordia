import {
  Carousal,
  InputArea,
  Labeled,
  ScrollableSnap,
} from '@li/design/elements';
import styles from './selected-item.module.css';
import Image from 'next/image';
import { StoreItem } from '../Store';
import clsx from 'clsx';
import { assurance, getStaticImageSrc } from '@li/design/icons';
import { DetailsTable } from '../../components';
import { fromCamelCase } from '@li/config/utils';
import { PolicyRow } from '../../bgt/components/PolicyRow';
import { AddOnCard } from '../../components/AddOnCard';
import { getRandomImagesArray } from '@md/blaunk/config';

type Props = {
  data: StoreItem;
};

const detailsOrder: (keyof StoreItem)[] = [
  'city',
  'area',
  'pinCode',
  'freeDelivery',
  'deliveredBy',
  'dispatchTime',
  'gstInvoice',
  'print',
  'giftWrap',
  'cartValue',
  'currency',
];
const addOn = getRandomImagesArray(20)(600, 600, 'food').map((src, i) => (
  <AddOnCard
    key={src}
    image={{
      src: src,
      width: 120,
      height: 120,
      enlargedWidth: 600,
      enlargedHeight: 600,
      alt: 'random',
    }}
    items={[
      ['Article', 'Strawberry Cake'],
      ['MRP', '$20'],
      ['Price', '$13'],
      // ['Rating', '4.5'],
      // ['Reviews', '1.5k Reviews'],
      ['Weight', '1kg'],
    ]}
  />
));

export const SelectedItem = ({ data }: Props) => {
  const detailsData = detailsOrder.map((key) => [
    fromCamelCase(key),
    data[key],
  ]) as [string, string | boolean][];

  return (
    <div className={styles.wrapper}>
      <div className={styles['product-details']}>
        <div className={styles['product-image']}>
          <div className={clsx(styles['product-header'])}>
            <div>{data.name}</div>
            <div>{data.timings}</div>
          </div>
          <Carousal className={styles['product-images']}>
            {data.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                width={800}
                height={600}
                alt={data.name}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </Carousal>
        </div>
        <div className={styles['product-info']}>
          <div className={clsx(styles['product-header'])}>
            <div>Vendor details:</div>
            <div>Open</div>
          </div>
          <div className={styles['product-info-section']}>
            <div className={styles['product-info-left']}>
              <div className={styles['product-header']}>
                <Image
                  src={getStaticImageSrc(assurance)}
                  alt="Bk assurance"
                  width={120}
                  height={40}
                />
                <div>Rating 4.5</div>
              </div>
              <div className={styles['product-header']}>
                <div className={styles['deal']}>Deal</div>
                <div className={styles['deal']}>Deal</div>
              </div>
              <Labeled label="Description">
                <InputArea value={data.description} />
              </Labeled>
            </div>
            <div className={styles['product-info-right']}>
              <DetailsTable data={detailsData} keyColWidth={200} />
            </div>
          </div>
        </div>
      </div>
      <PolicyRow />
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
    </div>
  );
};
