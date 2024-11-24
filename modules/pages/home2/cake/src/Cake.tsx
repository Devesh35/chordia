/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button, Carousal, ScrollableSnap } from '@li/design/elements';
import { getStaticImageSrc } from '@li/design/icons';
import { Constants, cakeBanner, getRandomImagesArray } from '@md/blaunk/config';
import { CustomerReviews, SectionHeader } from '@md/blaunk/design';
import { Basket } from 'modules/blaunk/design/src/lib/Basket';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AddOnCard } from '../../../../blaunk/pages/home/src/lib/components/AddOnCard';
import { DealsAndOffer } from '../../store/src/components/DealsAndOffer';
import { ProductCard, ProductWrapper } from '../../store/src/components/ProductCard';
import CakeBanner from './CakeBanner';
import Details from './Details';
import { Filter } from './Filter';
import { Search } from './Search';
import styles from './cake.module.css';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1921).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

const addOn = getRandomImagesArray(6)(600).map((src, i) => (
  <AddOnCard
    key={src}
    name="Strawberry Cake Strawberry Cake Strawberry Cake"
    image={{
      src: src,
      width: 250,
      height: 180,
      enlargedWidth: 600,
      enlargedHeight: 600,
      alt: 'random',
    }}
    items={
      [
        // ['MRP', '$20'],
        // ['Price', '$13'],
        // ['Rating', '4.5'],
        // ['Reviews', '1.5k Reviews'],
        // ['Weight/Units', '1kg'],
      ]
    }
    // weightSelect
    weightQuantityRow
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

export const Cake = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isTab, setIsTab] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleResizeTab = () => {
      setIsTab(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResizeTab);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <div style={{ objectFit: 'contain', display: 'flex', justifyContent: 'center' }}>
        <img
          src={getStaticImageSrc(cakeBanner)}
          alt="cake_banner"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      <Search isMobile={isMobile} isTab={isTab} />
      <Filter isMobile={isMobile} isTab={isTab} />
      <ProductWrapper>{products}</ProductWrapper>
      <CakeBanner shopName="La Crosieuter" location="Vacouver, BC" discount={69} /> <Details />
      <SectionHeader sectionName="Add On" />
      <ScrollableSnap className={styles['add-on']} controls delta={240}>
        {addOn}
      </ScrollableSnap>
      <div style={{ backgroundColor: '#FFBF61', paddingBottom: '25px', borderRadius: '12px' }}>
        <Basket />
      </div>
      <CustomerReviews />
      <DealsAndOffer showRecent />
    </div>
  );
};
