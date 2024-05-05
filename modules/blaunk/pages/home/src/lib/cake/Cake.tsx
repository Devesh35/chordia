import {
  Carousal,
  Input,
  InputArea,
  Labeled,
  ScrollableSnap,
  Select,
} from '@li/design/elements';
import {
  CakeFlavourOptions,
  CakeShapeOptions,
  CakeWeightOptions,
  Constants,
  DeliveryTimeOptions,
  QuantityOptions,
  getRandomImagesArray,
} from '@md/blaunk/config';

import { grid } from '@li/config/design';
import {
  Heart,
  Star,
  Veg,
  free_gifts,
  full_refund,
  getStaticImageSrc,
  on_time_delivery,
  sold_out,
} from '@li/design/icons';
import { CustomerReviews } from '@md/blaunk/design';
import clsx from 'clsx';
import Image from 'next/image';
import { DetailsTable, PolicyAside, ReportIssueTable } from '../components';
import { AddOnCard } from '../components/AddOnCard';
import { ProductCard, ProductWrapper } from '../components/ProductCard';
import { RemindMe } from '../components/RemindMe';
import { Tariff } from '../components/Tariff';
import { Filter } from './Filter';
import { Search } from './Search';
import styles from './cake.module.css';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1921).map(
  (src, i) => (
    <Image
      key={src}
      src={src}
      width={1920}
      height={Constants.b2bHomeBannerSize}
      alt="random"
      loading={i === 0 ? 'eager' : 'lazy'}
    />
  ),
);

const addOn = getRandomImagesArray(7)(600).map((src, i) => (
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
      ['Weight/Units', '1kg'],
    ]}
  />
));

const products = getRandomImagesArray(18)(300, 300, 'cake').map((src, i) => (
  <ProductCard
    key={i}
    src={src}
    details={{
      isVeg: true,
      name: 'Strawberry Cake',
      price: '$13',
      rating: '4.5',
      reviewCount: '1.5k',
    }}
  />
));

const product = getRandomImagesArray(2)(600, 600, 'cake').map((src, i) => (
  <div className={styles['product-image-wrapper']}>
    <div className={clsx(styles['image-tag'], styles['image-tag-left'])}>
      Best seller
    </div>
    <div className={clsx(styles['image-tag'], styles['image-tag-right'])}>
      <Heart
        width={24}
        height={24}
        fill={i === 0 ? 'var(--primary)' : 'var(--white)'}
      />
    </div>
    <Image
      src={src}
      width={600}
      height={600}
      alt="random"
      className={styles['product-image']}
    />
  </div>
));

const selectedCake = {
  name: 'Strawberry Cake',
  sellingPrice: 1500,
  price: 2000,
  rating: 4.5,
  reviews: '1.5k Reviews',
  address: 'Goa, 400527, India',
  occasion: 'Anniversary cake',
  type: 'Jar cake',
  delivery: 'vendor',
  timing: '9AM-10PM',
};

export const Cake = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <Search />
      <Filter />
      <ProductWrapper>{products}</ProductWrapper>
      <main className={clsx(styles.main, grid.grid)}>
        <div className={clsx(grid['col-9'], styles.content)}>
          <div className={clsx(styles['product-image-container'])}>
            {product}
          </div>
          <div className={clsx(styles.details, styles['details-main'])}>
            <Veg />
            <div className={styles.info}>
              <div className={styles['item-half']}>
                <div className={styles.name}>{selectedCake.name}</div>
                <div className={clsx(styles.rating, styles['item-rating'])}>
                  {selectedCake.rating}{' '}
                  <Star fill="var(--secondary)" width={16} height={16} />
                </div>
              </div>
              <div className={styles.address}>{selectedCake.address}</div>
              <div className={styles['item-half']}>
                <div className={styles.occasion}>{selectedCake.occasion}</div>
                <div className={styles.type}>{selectedCake.type}</div>
              </div>
              <div className={styles.timing}>
                Shop timing: {selectedCake.timing}
              </div>
            </div>
            <div className={styles['price-info']}>
              <div className={styles['selling-price']}>
                {selectedCake.sellingPrice}
              </div>
              <div className={styles['save']}>
                You save:
                <span>
                  {selectedCake.price - selectedCake.sellingPrice}
                </span>{' '}
              </div>
              <div className={styles['base-price']}>{selectedCake.price}</div>
            </div>
          </div>

          <div className={styles['select-wrapper']}>
            <Labeled label="Shape">
              <Select options={CakeShapeOptions} />
            </Labeled>
            <Labeled label="Flavour">
              <Select options={CakeFlavourOptions} />
            </Labeled>
            <Labeled label="Date">
              <Input type="date" />
            </Labeled>
            <Labeled label="Delivery time">
              <Select options={DeliveryTimeOptions} />
            </Labeled>
            <div className={styles['sub-select-wrapper']}>
              <Labeled label="Quantity">
                <Select options={QuantityOptions} />
              </Labeled>
              <Labeled label="Weight">
                <Select options={CakeWeightOptions} />
              </Labeled>
            </div>
          </div>
          <div className={styles.amenities}>
            <Image
              src={getStaticImageSrc(free_gifts)}
              alt="free_gifts"
              height={40}
              width={80}
            />
            <Image
              src={getStaticImageSrc(full_refund)}
              alt="full_refund"
              height={40}
              width={80}
            />
            <Image
              src={getStaticImageSrc(on_time_delivery)}
              alt="on_time_delivery"
              height={40}
              width={80}
            />
            <Image
              src={getStaticImageSrc(free_gifts)}
              alt="free_gifts"
              height={40}
              width={80}
            />
            <Image
              src={getStaticImageSrc(full_refund)}
              alt="full_refund"
              height={40}
              width={80}
            />
            <Image
              src={getStaticImageSrc(on_time_delivery)}
              alt="on_time_delivery"
              height={40}
              width={80}
            />
          </div>
          <div className={styles.desc}>
            <div className={styles.info2}>
              <Labeled
                labelWidth={80}
                label="Description"
                className={styles.desc}
                inline
              >
                <InputArea placeholder="Product description (max 250 characters...)" />
              </Labeled>
              <Labeled labelWidth={80} label="Message" inline>
                <Input placeholder="Message on cake (Maximum 5 words)" />
              </Labeled>
              <div className={styles['info2-sub']}>
                <DetailsTable
                  data={[
                    ['Delivery by', selectedCake.delivery],
                    ['Delivery charges', 'Free/NA'],
                    ['Min-Basket value', 'Rs.250'],
                    // ['Land mark', 'Temple'],
                    ['Free delivery', '2.5km'],
                  ]}
                />
              </div>
            </div>
            <div className={styles.info3}>
              <RemindMe name={selectedCake.name} />
              <div className={styles['sold-out']}>
                <Image
                  src={getStaticImageSrc(sold_out)}
                  alt="sold_out"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className={clsx(styles['vendor-info'], styles.desc)}>
            <DetailsTable
              keyColWidth={160}
              data={[
                ['Complimentary', 'Knife, Candles, Box packing, Card, Flower'],
                ['Deal', 'Orders above Rs 5000 get gift hamper worth rs 500'],
                ['Vendor details', 'Company cake & co, Kalyan'],
                ['Vendor GST/Vat No', 'ABCD1920AHS2839'],
              ]}
            />
            <DetailsTable
              keyColWidth={160}
              data={[
                ['Are you Govt registered Shop', 'Yes'],
                ['Supply from ', 'Cloud Kitchen'],
                ['Customized Order ', 'Yes'],
                ['Response Time ', 'Immediate'],
                ['Preparation Time ', 'Within 2 hrs'],
                [
                  'Delivery Condition ',
                  'We Accept & Deliver your valued orders only on our shop Timing.',
                ],
                ['Bulk', 'No'],
              ]}
            />
          </div>
          {/* <div className={styles['report-issue']}>
            <ReportIssue name={selectedCake.name} />
          </div> */}
        </div>
        <div className={clsx(grid['col-3'], styles.aside)}>
          <div>
            <Tariff />
            <PolicyAside />
          </div>
          <ReportIssueTable />
        </div>
      </main>
      <div className={clsx(styles['add-on-header'])}>Add on</div>
      <ScrollableSnap className={styles['add-on']} controls delta={240}>
        {addOn}
      </ScrollableSnap>
      <CustomerReviews />
    </div>
  );
};
