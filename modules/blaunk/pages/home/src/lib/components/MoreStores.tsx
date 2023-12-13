import Image from 'next/image';
import { Carousal } from '@li/design/elements';
import { getRandomImagesArray, blaunkStore } from '@md/blaunk/config';
import { ImageCardOverlay } from '@li/design/components';
import styles from './more-stores.module.css';

const images = getRandomImagesArray(3)(400, 600).map((src) => (
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image src={blaunkStore} width={640} height={190} alt="store" />
      </div>
      <Carousal className={styles.carousal}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div className={styles.content} key={i}>
              {images}
            </div>
          ))}
      </Carousal>
    </div>
  );
};
