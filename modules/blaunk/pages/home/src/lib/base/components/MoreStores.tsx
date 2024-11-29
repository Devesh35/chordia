import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray, storeRoof } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './more-stores.module.css';

const images = (size: number) =>
  getRandomImagesArray(size)(400, 600).map((src) => (
    <ImageCardOverlay
      isClickable
      key={src}
      image={{
        src,
        width: 600,
        height: 400,
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
              {images(isMobile ? 1 : 3)}
            </div>
          ))}
      </Carousal>
    </div>
  );
};
