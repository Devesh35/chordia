import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import styles from './trendy-stores.module.css';

const images = (isMobile: boolean) =>
  getRandomImagesArray(isMobile ? 1 : 2)(isMobile ? 240 : 500, isMobile ? 400 : 900).map((src) => (
    <ImageCardOverlay
      isClickable
      key={src}
      image={{
        src,
        width: isMobile ? 400 : 900,
        height: isMobile ? 240 : 500,
        alt: 'random',
      }}
      bottom={<div className={styles.label}>Trendy star name</div>}
      noFillet
    />
  ));

export const TrendyStars = () => {
  const isMobile = useMedia();

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="Trendy-stars" className={styles.header} />
      <Carousal className={styles.carousal} variant="dark">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <div className={styles.content}>{images(isMobile)}</div>
            </div>
          ))}
      </Carousal>
    </div>
  );
};
