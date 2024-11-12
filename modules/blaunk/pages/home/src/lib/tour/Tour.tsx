'use client';

import { Carousal, PaginationNumber } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';

import { grid } from '@li/config/design';
import clsx from 'clsx';
import Image from 'next/image';
import { BlaunkHome } from '../base/components/BlaunkHome';
import { HomeBanners } from '../base/components/HomeBanners';
import { DealsAndOffer } from '../components/DealsAndOffer';
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
