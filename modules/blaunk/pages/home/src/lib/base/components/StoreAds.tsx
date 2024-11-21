import { Carousal } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './store-ads.module.css';

const img = getRandomImagesArray(3)(600, 1921).map((src) => (
  <Image key={src} src={src} width={1914} height={600} alt="tour" />
));

export const StoreAds = () => {
  return (
    <div>
      {/* <Placeholder height={50} /> */}
      <Carousal className={styles.carousal} autoInterval={5000}>
        {img}
      </Carousal>
    </div>
  );
};
