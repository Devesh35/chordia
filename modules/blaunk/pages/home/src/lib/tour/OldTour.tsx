import { Input, Labeled, Select } from '@li/design/elements';
import {
  ArrivingTimeOptions,
  RoomRequestOptions,
  RoomTypesOptions,
  SpecialRequestsOptions,
  getRandomImagesArray,
} from '@md/blaunk/config';

import { grid } from '@li/config/design';
import { Heart, Star, free_gifts, full_refund, getStaticImageSrc, on_time_delivery, sold_out } from '@li/design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import { DetailsTable, PolicyAside, ReportIssueTable } from '../components';
import { RemindMe } from '../components/RemindMe';
import { Tariff } from '../components/Tariff';
import { Amenities } from './Amenities';
import styles from './tour.module.css';

const product = getRandomImagesArray(2)(600, 600, 'hotels').map((src, i) => (
  <div className={styles['product-image-wrapper']}>
    <div className={clsx(styles['image-tag'], styles['image-tag-left'])}>Best seller</div>
    <div className={clsx(styles['image-tag'], styles['image-tag-right'])}>
      <Heart width={24} height={24} fill={i === 0 ? 'var(--primary)' : 'var(--white)'} />
    </div>
    <Image src={src} width={600} height={600} alt="random" className={styles['product-image']} />
  </div>
));

const selectedTour = {
  name: 'Hotel name',
  sellingPrice: 1500,
  price: 2000,
  rating: 4.5,
  reviews: '1.5k Reviews',
  address: 'Goa, 400527, India',
  occasion: 'Suite room',
  type: 'Deluxe, Garden view',
  delivery: 'vendor',
  timing: '9AM-06PM',
};

export const OldTour = () => {
  return (
    <main className={clsx(styles.main, grid.grid)}>
      <div className={clsx(grid['col-9'], styles.content)}>
        <div className={clsx(styles['product-image-container'])}>{product}</div>
        <div className={clsx(styles.details, styles['details-main'])}>
          <div className={styles.info}>
            <div className={styles['item-half']}>
              <div className={styles.name}>{selectedTour.name}</div>
              <div className={clsx(styles.rating, styles['item-rating'])}>
                {selectedTour.rating} <Star fill="var(--secondary)" width={16} height={16} />
              </div>
            </div>
            <div className={styles.address}>{selectedTour.address}</div>
            <div className={styles['item-half']}>
              <div className={styles.occasion}>{selectedTour.occasion}</div>
              <div className={styles.type}>{selectedTour.type}</div>
            </div>
            <div className={styles.timing}>Check-in Timing: {selectedTour.timing}</div>
          </div>
          <div className={styles['price-info']}>
            <div className={styles['selling-price']}>{selectedTour.sellingPrice}</div>
            <div className={styles['save']}>
              You save:
              <span>{selectedTour.price - selectedTour.sellingPrice}</span>{' '}
            </div>
            <div className={styles['base-price']}>{selectedTour.price}</div>
          </div>
        </div>

        <div className={styles['select-wrapper']}>
          <div className={clsx(styles['sub-select-wrapper-equal'])}>
            <Labeled label="Check in">
              <Input type="date" />
            </Labeled>
            <Labeled label="Check out">
              <Input type="date" />
            </Labeled>
          </div>
          <Labeled label="Days" className={styles['select-wrapper-small-item']}>
            <Input type="number" isReadOnly value={4} />
          </Labeled>
          <Labeled label="Arriving time">
            <Select options={ArrivingTimeOptions} />
          </Labeled>
          <div className={styles['sub-select-wrapper']}>
            <Labeled label="Request">
              <Select options={RoomRequestOptions} />
            </Labeled>
            <Labeled label="Detail">
              <Select options={RoomTypesOptions} />
            </Labeled>
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles.info2}>
            <DetailsTable
              data={[
                ['Room size', '250 sq.ft'],
                ['Landmark', 'Temple (2.5km)'],
              ]}
            />
          </div>
          <div className={styles.info3}>
            <RemindMe name={selectedTour.name} hasBulk />
          </div>
        </div>

        <div className={styles.description}>
          <DetailsTable
            data={[
              [
                'Description',
                'Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of the city. Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of the city. Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of the city. Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of the city.',
              ],
            ]}
          />
        </div>
        <div className={styles.desc}>
          <div className={styles.info2}>
            <DetailsTable
              data={[
                ['Pet allowed', 'Yes'],
                ['Taxes', 'Extra'],
                ['Currency  Exchange', 'No'],
                ['Pay Mode', 'Cash'],
              ]}
            />
            <div className={styles.amenities}>
              <Image src={getStaticImageSrc(free_gifts)} alt="free_gifts" height={40} width={80} />
              <Image src={getStaticImageSrc(full_refund)} alt="full_refund" height={40} width={80} />
              <Image src={getStaticImageSrc(on_time_delivery)} alt="on_time_delivery" height={40} width={80} />
            </div>
          </div>
          <div className={styles.info3}>
            <div className={styles['sold-out']}>
              <Image src={getStaticImageSrc(sold_out)} alt="sold_out" width={200} height={100} />
            </div>
          </div>
        </div>
        <div>
          <Amenities isReadOnly />
        </div>
        <div className={clsx(styles['vendor-info'], styles.info2)}>
          <DetailsTable
            data={[
              ['Special Request', <Select options={SpecialRequestsOptions} />],
              ['Deal', 'Orders above Rs 5000 get gift hamper worth rs 500'],
              ['GST Invoice', 'Yes'],
              ['Company name ', 'Company cake & co, Kalyan'],
              ['Address', 'Kalyan, 400400'],
              ['Reception no.', '+919929988288'],
              ['Whatsapp ', '+918899889988'],
              ['Cus care email', 'cake@company.co'],
              ['Vendor GST/VAT No', 'ABCD1920AHS2839'],
            ]}
          />
        </div>
        {/* <div className={styles['report-issue']}>
        <ReportIssue name={selectedTour.name} />
      </div> */}
      </div>
      <div className={clsx(grid['col-3'], styles.aside)}>
        <Tariff />
        <PolicyAside />
        <ReportIssueTable />
      </div>
    </main>
  );
};
