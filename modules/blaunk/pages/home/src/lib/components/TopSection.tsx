import { Carousal, ScrollableSnap } from '@li/design/elements';
import { CountryCard } from '@li/design/components';
import Image from 'next/image';
import {
  AvailableCountries,
  Constants,
  getRandomImagesArray,
} from '@md/blaunk/config';
import styles from './top-section.module.css';

const images = getRandomImagesArray(6)(
  Constants.homeBannerImageSizeMax,
  1920,
).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.homeBannerImageSizeMax}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const TopSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="left" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <div className={styles['flag-bg']}>
        <ScrollableSnap className={styles['scroll-snap']}>
          {AvailableCountries.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </ScrollableSnap>
      </div>
    </div>
  );
};
