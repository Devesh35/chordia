'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousal } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './buy.module.css';
import { BuySection } from './BuySection';
import BGTImages from './components/BGTImages';
import { SearchBar } from './components/SearchBar';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1921).map((src, i) => (
  <Image
    key={Math.random()}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const BGTBuy = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isTab, setIsTab] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
      <RollingAd size={150} />
      <SearchBar />
      <BuySection />
      <CustomerReviews />
      <BGTImages />
    </div>
  );
};
