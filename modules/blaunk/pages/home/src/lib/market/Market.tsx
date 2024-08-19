'use client';
import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { blaunkMarketPlace, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import { useState } from 'react';
import styles from './market.module.css';
import { Search } from './Search';
import { SelectedItem } from './SelectedItem';

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
      <div className={styles['banner']}>
        <Image width={1500} height={200} alt="indian Ad" src={blaunkMarketPlace} style={{ objectFit: 'contain' }} />
      </div>
      <Search />

      <Carousal className={styles.carousal} variant="dark">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <div className={styles.content}>{ads(() => setIsOpen(true))}</div>
              <div className={styles.content}>{ads(() => setIsOpen(true))}</div>
            </div>
          ))}
      </Carousal>
      <SelectedItem isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
