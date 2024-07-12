import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import styles from './trendy-stores.module.css';

const images = getRandomImagesArray(2)(500, 900).map((src) => (
  <ImageCardOverlay
    isClickable
    key={src}
    image={{
      src,
      width: 900,
      height: 500,
      alt: 'random',
    }}
    bottom={<div className={styles.label}>Trendy star name</div>}
  />
));

export const TrendyStars = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="Trendy-stars" />
      <Carousal className={styles.carousal} variant="dark">
        {Array(5)
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
