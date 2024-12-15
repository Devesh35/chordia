'use client';

import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './store-ads.module.css';

const img = (isMobile: boolean) =>
  getRandomImagesArray(3)(600, 1921).map((src) => (
    <Image key={src} src={src} width={isMobile ? 400 : 1914} height={isMobile ? 240 : 600} alt="tour" />
  ));

export const StoreAds = () => {
  const isMobile = useMedia();

  return (
    <div>
      {/* <Placeholder height={50} /> */}
      <Carousal className={styles.carousal} style={{ height: `${isMobile ? 240 : 600}px` }} autoInterval={5000}>
        {img(isMobile)}
      </Carousal>
    </div>
  );
};
