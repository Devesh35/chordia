'use client';

import { CountryCard } from '@li/design/components';
import { Carousal, ScrollableSnap } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { AvailableCountries, Constants, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './top-section.module.css';

const images = (isMobile: boolean) =>
  getRandomImagesArray(6)(Constants.homeBannerImageSizeMax, 1920).map((src, i) => (
    <Image
      key={src}
      src={src}
      width={isMobile ? 440 : 1920}
      height={isMobile ? 240 : Constants.homeBannerImageSizeMax}
      alt="random"
      loading={i === 0 ? 'eager' : 'lazy'}
    />
  ));

export const TopSection = () => {
  const isMobile = useMedia();

  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        {isMobile ? (
          <Carousal autoInterval={5000} hidePagination hideControls>
            {images(isMobile)}
          </Carousal>
        ) : (
          <Carousal pagination="left" autoInterval={5000} enablePagination>
            {images(isMobile)}
          </Carousal>
        )}
      </div>
      <div className={styles['flag-bg']}>
        <ScrollableSnap className={styles['scroll-snap']} controls>
          {AvailableCountries.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </ScrollableSnap>
      </div>
    </div>
  );
};
