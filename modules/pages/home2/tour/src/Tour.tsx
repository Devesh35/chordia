/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Carousal, PaginationNumber } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';

import { grid } from '@li/config/design';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BlaunkHome } from '../../../../blaunk/pages/home/src/lib/base/components/BlaunkHome';
import { HomeBanners } from '../../../../blaunk/pages/home/src/lib/base/components/HomeBanners';
import { DealsAndOffer } from '../../store/src/components/DealsAndOffer';
import { Filter } from './Filter';
import { Products } from './Products';
import { Search } from './Search';
import styles from './tour.module.css';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1920, 'hotels').map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const Tour = () => {
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
      <BlaunkHome />
      <HomeBanners />
      <Search />
      <Filter />
      <div className={clsx(grid.grid, grid['grid-12'], styles.grid)}>
        <Products />
      </div>
      <div className={styles['pagination-wrapper']}>
        <PaginationNumber active={1} total={4} position="none" variant="light" />
      </div>
      <DealsAndOffer showRecent />
    </div>
  );
};
