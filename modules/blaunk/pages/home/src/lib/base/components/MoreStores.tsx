import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray, storeRoof } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './more-stores.module.css';

const images = (isMobile: boolean) =>
  getRandomImagesArray(isMobile ? 2 : 3)(isMobile ? 240 : 400, isMobile ? 200 : 600).map((src) => (
    <ImageCardOverlay
      isClickable
      key={src}
      image={{
        src,
        width: isMobile ? 200 : 600,
        height: isMobile ? 240 : 400,
        alt: 'random',
      }}
    />
  ));

export const MoreStores = () => {
  const isMobile = useMedia();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image src={storeRoof} width={isMobile ? 320 : 650} height={isMobile ? 140 : 200} alt="store_roof" />
      </div>
      <Carousal className={styles.carousal}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div className={styles.content} key={i}>
              {images(isMobile)}
            </div>
          ))}
      </Carousal>
    </div>
  );
};
