import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './top-banner.module.css';

const images = (isMobile: boolean) =>
  getRandomImagesArray(6)(Constants.boutiqueBannerSize, 1920, 'saree').map((src, i) => (
    <Image
      key={src}
      src={src}
      width={isMobile ? 400 : 1920}
      height={isMobile ? 200 : Constants.boutiqueBannerSize}
      alt="random"
      loading={i === 0 ? 'eager' : 'lazy'}
    />
  ));
export const TopSlider = () => {
  const isMobile = useMedia();
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} style={{ height: isMobile ? 200 : Constants.boutiqueBannerSize }}>
        <Carousal autoInterval={10000} hideControls hidePagination>
          {images(isMobile)}
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
