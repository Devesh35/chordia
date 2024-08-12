'use client';
import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import { useState } from 'react';
import styles from './market.module.css';
import { Search } from './Search';
import { SelectedItem } from './SelectedItem';

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

const ads = (open: () => void) =>
  getRandomImagesArray(5)(400, 300).map((src) => (
    <ImageCardOverlay
      isClickable
      onClick={() => {
        open();
      }}
      key={src}
      image={{
        src,
        width: 240,
        height: 300,
        alt: 'random',
      }}
    />
  ));

export const Market = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <Search />
      <div>
        <div className={styles.content}>{ads(() => setIsOpen(true))}</div>
        <div className={styles.content}>{ads(() => setIsOpen(true))}</div>
      </div>
      <SelectedItem isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
