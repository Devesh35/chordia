import {
  Button,
  Carousal,
  Input,
  InputArea,
  Labeled,
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

import styles from './cake.module.css';
import Image from 'next/image';
import { Search } from './Search';
import { Filter } from '../components/Filter';
import clsx from 'clsx';
import { grid } from '@li/config/design';
import { ImageCard } from '@li/design/components';
import {
  Heart,
  Star,
  Veg,
  getStaticImageSrc,
  sold_out,
} from '@li/design/icons';
import { AddOnCardLayout, PolicyAside, ReportIssue } from '../components';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1920).map(
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

const products = getRandomImagesArray(18)(300, 300, 'cake').map((src, i) => (
  <ImageCard
    key={i}
    className={grid['col-2']}
    image={{
      src: src,
      width: 300,
      height: 300,
      alt: 'random',
    }}
    topLeft={<div className={styles['card-tag']}>Best seller</div>}
    details={
      <div className={styles.details}>
        <Veg />
        <div className={styles['name-wrapper']}>
          <div className={styles['card-name']}>Strawberry Cake</div>
          <div className={styles.price}>$13</div>
        </div>
        <div className={styles['rating-wrapper']}>
          <div className={styles.rating}>
            4.5 <Star fill="var(--secondary)" width={16} height={16} />
          </div>
          <span className={styles['review-count']}>1.5k Reviews</span>
        </div>
      </div>
    }
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
      <div className={clsx(grid.grid, grid['grid-12'], styles.grid)}>
        {products}
      </div>
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
              <div className={styles.delivery}>
                Delivered by: {selectedCake.delivery}
              </div>
              <div className={styles.timing}>
                Shop timing: {selectedCake.timing}
              </div>
            </div>
            <div className={styles['price-info']}>
              <div className={styles['selling-price']}>
                ${selectedCake.sellingPrice}
              </div>
              <div className={styles['save']}>
                You save: $
                <span>{selectedCake.price - selectedCake.sellingPrice}</span>{' '}
              </div>
              <div className={styles['base-price']}>${selectedCake.price}</div>
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
          <div className={styles.desc}>
            <div className={styles.info2}>
              <Labeled label="Description">
                <InputArea />
              </Labeled>
              <Labeled label="Message" inline>
                <Input placeholder="Message for vendor" />
              </Labeled>
              <Labeled label="Delivery charges" inline>
                Free/NA
              </Labeled>
              <Labeled label="Delivery area" inline>
                Temple (2.5km)
              </Labeled>
            </div>
            <div className={styles.info3}>
              <Button variant="error">Remind Me</Button>
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
          <div className={styles['vendor-info']}>
            <div>Deal: Orders above Rs 5000 get gift hamper worth rs 500</div>
            <div>Vendor details: Company cake & co, Kalyan</div>
            <div>Vendor GST/Vat No:</div>
          </div>
          <div className={styles['report-issue']}>
            <ReportIssue name={selectedCake.name} />
          </div>
        </div>
        <div className={clsx(grid['col-3'], styles.aside)}>
          <p className={styles['aside-title']}>Tariff Details</p>
          <div className={clsx(styles['aside-table'])}>
            <p>Charges</p>
            <span>Rs. 8600</span>
          </div>
          <div className={clsx(styles['aside-table'])}>
            <p>Discounts</p>
            <span>Rs. 2200</span>
          </div>

          <div className={clsx(styles['aside-table'])}>
            <p>SubTotal</p>
            <span>Rs. 8600</span>
          </div>

          <div className={clsx(styles['aside-table'])}>
            <p>QTY No.</p>
            <span>1</span>
          </div>

          <div className={clsx(styles['aside-table'])}>
            <p>Service Charge</p>
            <span>Rs.192</span>
          </div>

          <div
            className={clsx(styles['aside-table'], styles['aside-table-main'])}
          >
            <p>To Pay</p>
            <span className="h5">Rs.6492</span>
          </div>

          <Button className={styles['aside-table-action']}>Book Now</Button>

          <PolicyAside />
        </div>
      </main>
      <div className={clsx(styles['add-on-header'])}>Add on</div>
      <div className={clsx(styles['add-on'], grid.grid)}>
        {Array.from({ length: 4 }).map((_, i) => (
          <AddOnCardLayout key={i} />
        ))}
      </div>
    </div>
  );
};
