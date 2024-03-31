import { Carousal } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import { RollingAd } from '@md/blaunk/design';
import Image from 'next/image';
import { ProductCard, ProductWrapper } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { SelectedItem } from './components/SelectedItem';
import styles from './store.module.css';

export type StoreItem = {
  name: string;
  rating: string;
  reviewCount: string;
  images: string[];
  timings: string;
  description: string;
  city: string;
  area: string;
  pinCode: string;
  freeDelivery: boolean;
  deliveredBy: string;
  dispatchTime: string;
  gstInvoice: string;
  print: string;
  giftWrap: string;
  cartValue: string;
  currency: string;
};

const dummyItem: StoreItem = {
  name: 'Bikaner sweets',
  rating: '4.5',
  reviewCount: '1.5k',
  images: getRandomImagesArray(6)(600, 800, 'food'),
  timings: '9:00 AM - 9:00 PM',
  description:
    'Bikaner sweets is a famous sweet shop in the city. We are known for our quality and taste. We have been serving our customers for the past 20 years.',
  city: 'Bikaner',
  area: 'Main Gate',
  pinCode: '334001',
  freeDelivery: true,
  deliveredBy: 'Bikaner sweets',
  dispatchTime: '30 min',
  gstInvoice: 'Available',
  print: 'Not available',
  giftWrap: 'Available',
  cartValue: '250/500/1000',
  currency: 'INR',
};

const images = getRandomImagesArray(6)(
  Constants.b2bHomeBannerSize,
  1920,
  'food',
).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

const products = getRandomImagesArray(18)(300, 300, 'food').map((src, i) => (
  <ProductCard
    key={i}
    src={src}
    topLeft="Open"
    details={{
      name: 'Bikaner sweets',
      rating: '4.5',
      reviewCount: '1.5k',
    }}
  />
));

export const Store = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <RollingAd />
      <SearchBar />
      <ProductWrapper>{products}</ProductWrapper>
      <SelectedItem data={dummyItem} />
      <RollingAd />
      <RollingAd />
    </div>
  );
};
