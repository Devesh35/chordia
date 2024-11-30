'use client';

import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { Constants, getRandomImagesArray, storeRoof } from '@md/blaunk/config';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import { Basket } from 'modules/blaunk/design/src/lib/Basket';
import Image from 'next/image';
import { DealsAndOffer } from '../components/DealsAndOffer';
import { ProductCard, ProductWrapper } from '../components/ProductCard';
import { SearchBar } from './components/SearchBar';
import { SelectedItem } from './components/SelectedItem';
import StoreBanner from './components/StoreBanner';
import styles from './store.module.css';

export type StoreItem = {
  id: string;
  area: string;
  minCartValue: string;
  city: string;
  currency: string;
  deliveredBy: string;
  description: string;
  dispatchTime: string;
  deliveryCharges: string;
  giftWrap: string;
  gstInvoice: string;
  images: string[];
  name: string;
  pinCode: string;
  print: string;
  rating: string;
  reviewCount: string;
  contactNo: string;
  timings: string;
  complaintsRaised: number;
  complaintsResolved: number;
  party: string;
  customized: string;
  freeDeliveryUpto: string;
  uniqueCode: string;
};

const dummyItem: StoreItem = {
  id: 'string',
  name: 'Bikaner sweets',
  rating: '4.5',
  images: getRandomImagesArray(3)(450, 800, 'food'),
  reviewCount: '1.5k',
  timings: '9:00 AM - 9:00 PM',
  description:
    'Bikaner sweets is a famous sweet shop in the city. We are known for our quality and taste. We have been serving our customers for the past 20 years. Bikaner sweets is a famous sweet shop in the city. We are known for our quality and taste. We have been serving our customers for the past 20 years. Bikaner sweets is a famous sweet shop in the city. We are known for our quality and taste. We have be.',
  city: 'Bikaner',
  contactNo: '1234567890',
  area: 'Main Gate',
  pinCode: '334001',
  deliveryCharges: '$25',
  deliveredBy: 'Bikaner sweets',
  dispatchTime: '30 min',
  gstInvoice: 'Available',
  print: 'Not available',
  giftWrap: 'Available',
  minCartValue: '250', //500/1000',
  currency: 'INR',
  complaintsRaised: 10,
  complaintsResolved: 5,
  party: 'Accepted',
  customized: 'Yes',
  freeDeliveryUpto: '2km',
  uniqueCode: 'PRA1976/24-01',
};

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1920, 'food').map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

const products = getRandomImagesArray(18)(300, 300, 'items').map((src, i) => (
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
  const isMobile = useMedia();

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles['carousal-wrapper']}>
          {isMobile ? (
            <Carousal autoInterval={10000} hidePagination hideControls>
              {images}
            </Carousal>
          ) : (
            <Carousal pagination="bottom" autoInterval={10000} enablePagination>
              {images}
            </Carousal>
          )}
        </div>
        <div style={{ marginTop: '10px' }}>
          <RollingAd size={150} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Image src={storeRoof} width={650} height={200} alt="store_roof" />
      </div>
      <SearchBar />
      <ProductWrapper>{products}</ProductWrapper>
      {/* <DealSection /> */}
      <StoreBanner storeName="Bikaner sweets" location="Bikaner, Rajasthan" discount={50} />
      <SelectedItem data={dummyItem} />
      <div style={{ backgroundColor: '#FFBF61', paddingBottom: '25px', borderRadius: '12px' }}>
        <Basket />
      </div>
      <CustomerReviews />
      <DealsAndOffer />
    </div>
  );
};
