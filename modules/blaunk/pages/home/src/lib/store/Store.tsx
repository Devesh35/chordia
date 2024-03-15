import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './store.module.css';
import { Carousal } from '@li/design/elements';
import { AdSection } from '@md/blaunk/design';
import { ProductCard, ProductWrapper } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';

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
      <AdSection />
      <SearchBar />
      <ProductWrapper>{products}</ProductWrapper>
    </div>
  );
};
