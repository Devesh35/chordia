/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Routes, getRandomImagesArray } from '@md/blaunk/config';

import { grid } from '@li/config/design';
import { ImageCard } from '@li/design/components';
import { Star } from '@li/design/icons';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import styles from './tour.module.css';

const products = (router: () => void) =>
  getRandomImagesArray(18)(300, 300, 'hotel').map((src, i) => {
    return (
      <ImageCard
        key={i}
        className={clsx(grid['col-2'], grid['col-t-3'], grid['col-m-6'], 'clickable')}
        image={{
          src: src,
          width: 300,
          height: 300,
          alt: 'random',
        }}
        topLeft={<div className={styles['card-tag']}>Best seller</div>}
        onClick={() => router()}
        // topRight={}
        details={
          <div className={styles.details}>
            <div className={styles['name-wrapper']}>
              <div className={styles['card-name']}>Hotel name</div>
              <div className={styles.price}>Rs 1300/day</div>
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
    );
  });
export const Products = () => {
  const { push } = useRouter();

  const allProducts = products(() => push(Routes.home.tour.item('item').path));

  return allProducts;
};
