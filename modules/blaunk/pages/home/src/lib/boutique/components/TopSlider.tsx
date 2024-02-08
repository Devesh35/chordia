import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import styles from './top-banner.module.css';
import Image from 'next/image';
import { Carousal } from '@li/design/elements';

const images = getRandomImagesArray(6)(
  Constants.boutiqueBannerSize,
  1920,
  'saree',
).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={Constants.boutiqueBannerSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));
export const TopSlider = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{ height: Constants.boutiqueBannerSize }}
      >
        <Carousal autoInterval={10000} hideControls hidePagination>
          {images}
        </Carousal>
      </div>
      <div className={styles.text}>
        <div className={styles['text-title']}>
          <div>GET READY WITH US</div>
          <div>FOR</div>
          <div>YOUR SPECIAL DAY</div>
        </div>
        <div className={styles['more']}>GET MORE</div>
      </div>
    </div>
  );
};
