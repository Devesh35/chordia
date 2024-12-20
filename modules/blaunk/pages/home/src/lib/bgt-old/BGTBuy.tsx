import { Carousal } from '@li/design/elements';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import { RollingAd } from '@md/blaunk/design';

import Image from 'next/image';
import styles from './buy.module.css';
import { SearchBar } from './components/SearchBar';
import { SearchTable } from './components/SearchTable';

const images = getRandomImagesArray(6)(Constants.b2bHomeBannerSize, 1921).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.b2bHomeBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const BGTBuy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['carousal-wrapper']}>
        <Carousal pagination="bottom" autoInterval={10000} enablePagination>
          {images}
        </Carousal>
      </div>
      <RollingAd size={150} />
      <SearchBar />
      <SearchTable />
    </div>
  );
};
