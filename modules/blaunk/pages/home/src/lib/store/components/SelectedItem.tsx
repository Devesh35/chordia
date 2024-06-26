import { fromCamelCase } from '@li/config/utils';
import {
  Button,
  Carousal,
  InputArea,
  Labeled,
  ScrollableSnap,
  Select,
} from '@li/design/elements';
import { assurance, getStaticImageSrc } from '@li/design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import { DetailsTable } from '../../components';
import { StoreItem } from '../Store';
import styles from './selected-item.module.css';

import { getRandomImagesArray } from '@md/blaunk/config';
import { AddOnCard } from '../../components/AddOnCard';

type Props = {
  data: StoreItem;
};

const detailsOrder: (keyof StoreItem)[] = [
  'city',
  'area',
  'pinCode',
  'delivery',
  'deliveredBy',
  'dispatchTime',
  'gstInvoice',
  'giftWrap',
  'minCartValue',
  'currency',
  'timings',
  'complaintsRaised',
  'complaintsResolved',
];
const addOn = getRandomImagesArray(6)(600, 600, 'food').map((src, i) => (
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
    name="Store"
    quantityDropDown
    weightSelect
    items={[
      [
        'Color',
        <Select
          maxHeight={160}
          options={[
            { id: '1', item: 'Red' },
            { id: '2', item: 'Blue' },
            { id: '3', item: 'Green' },
            { id: '4', item: 'Yellow' },
            { id: '5', item: 'Black' },
          ]}
        />,
      ],
    ]}
    actionRow={
      <div className={styles['addon-action']}>
        <div className={styles['addon-cost']}>
          <span className={styles['addon-cut']}>$20</span>
          <span>$7 </span>
          <span className={styles['addon-price']}>$13 </span>
        </div>
        <Button variant="secondary">Add to cart</Button>
      </div>
    }
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
          {/* <div className={clsx(styles['product-header'])}>
            <div>{data.name}</div>
            <div>{data.timings}</div>
          </div> */}
          <Carousal className={styles['product-images']}>
            {data.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                width={800}
                height={450}
                alt={data.name}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </Carousal>
        </div>
        <div className={styles['product-info']}>
          <div className={clsx(styles['product-header'])}>
            {/* <div>Vendor details:</div>
            <div>Open</div> */}
          </div>
          <div className={styles['product-info-section']}>
            <div className={styles['product-info-left']}>
              <div className={styles['product-header']}>
                {data.name}
                <Image
                  src={getStaticImageSrc(assurance)}
                  alt="Bk assurance"
                  width={120}
                  height={40}
                />
                <div className={styles['product-header-rating']}>
                  Rating 4.5
                </div>
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
              <DetailsTable data={detailsData} keyColWidth={220} />
            </div>
          </div>
        </div>
      </div>
      {/* <PolicyRow /> */}
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
    </div>
  );
};
