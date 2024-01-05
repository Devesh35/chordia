import { Carousal } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import { AdSection } from '@md/blaunk/design';

import styles from './buy.module.css';
import Image from 'next/image';
import { Search } from './Search';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1920).map(
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

export const BGTBuy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <AdSection />
      <Search />
    </div>
  );
};
