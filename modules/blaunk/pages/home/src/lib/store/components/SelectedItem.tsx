'uce client';

import { fromCamelCase } from '@li/config/utils';
import { Button, Carousal, InputArea, Labeled, ScrollableSnap } from '@li/design/elements';
import Image from 'next/image';
import { DetailsTable } from '../../components';
import { StoreItem } from '../Store';
import styles from './selected-item.module.css';

import { assurance, getStaticImageSrc } from '@li/design/icons';
import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import { AddOnCard } from '../../components/AddOnCard';

type Props = {
  data: StoreItem;
};

const detailsOrder: (keyof StoreItem)[] = [
  'minCartValue',
  'freeDeliveryUpto',
  'deliveryCharges',
  'deliveredBy',
  'dispatchTime',
  'gstInvoice',
  'giftWrap',
  'currency',
  'party',
  'customized',
  'uniqueCode',
];
const addOn = getRandomImagesArray(6)(600, 600, 'food').map((src, i) => (
  <AddOnCard
    name="Store Store Store Store"
    key={src}
    image={{
      src: src,
      width: 250,
      height: 180,
      enlargedWidth: 600,
      enlargedHeight: 600,
      alt: 'random',
    }}
    weightQuantityRow
    items={
      [
        // [
        //   'Color',
        //   <Select
        //     maxHeight={160}
        //     options={[
        //       { id: '1', item: 'Red' },
        //       { id: '2', item: 'Blue' },
        //       { id: '3', item: 'Green' },
        //       { id: '4', item: 'Yellow' },
        //       { id: '5', item: 'Black' },
        //     ]}
        //   />,
        // ],
      ]
    }
    actionRow={
      <div className={styles['addon-action']}>
        <div className={styles['addon-cost']}>
          <span className={styles['addon-cut']}>$20</span>
          <span className={styles['addon-discount']}>$7 </span>
          <span className={styles['addon-price']}>$13 </span>
        </div>
        <Button variant="secondary">Add</Button>
      </div>
    }
  />
));

export const SelectedItem = ({ data }: Props) => {
  const detailsData = detailsOrder.map((key) => [fromCamelCase(key), data[key]]) as [string, string | boolean][];

  return (
    <div className={styles.wrapper}>
      <ScrollableSnap className={styles['product-section']} controls>
        <div className={styles['product-section-carousel-box']}>
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
        <div className={clsx(styles['product-section-box'], styles['product-info-right'])}>
          <div className={styles['product-header']}>
            <div style={{ fontSize: 24 }}>{data.name}</div>
          </div>
          <Row>
            <Col>
              <div style={{ fontSize: 20, color: 'blue', fontWeight: 'bold' }}> Timings: {data.timings}</div>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Image src={getStaticImageSrc(assurance)} alt="Bk assurance" width={120} height={35} />
            </Col>
          </Row>

          <DetailsTable
            keyColWidth={160}
            data={[
              ['City', data.city],
              ['Area', data.area],
              ['Pin code', data.pinCode],
              ['Rating', data.rating],
              ['Complaints Raised', data.complaintsRaised],
              ['Complaints Resolved', data.complaintsResolved],
              ['Contact no', data.contactNo],
            ]}
          />
        </div>
        <div className={clsx(styles['product-section-box'], styles['product-info-right'])}>
          <DetailsTable data={detailsData} keyColWidth={220} />
        </div>
        <div className={clsx(styles['product-section-box'], styles['product-info-right'])}>
          <Labeled label="Description">
            <InputArea value={data.description} height={380} />
          </Labeled>
        </div>
      </ScrollableSnap>
      {/* <div className={styles['product-info']}>
            <div className={clsx(styles['product-header'])}>
              <div>Vendor details:</div>
              <div>Open</div>
            </div>
            <div className={styles['product-info-section']}>
            </div>
          </div> */}
      {/* <PolicyRow /> */}
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
      <ScrollableSnap className={styles.addon}>{addOn}</ScrollableSnap>
    </div>
  );
};
