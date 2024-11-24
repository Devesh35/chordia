import { ImageCardOverlay } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import styles from './company-carousel.module.css';

const images = getRandomImagesArray(2)(500, 900).map((src) => (
  <ImageCardOverlay
    isClickable
    image={{
      src,
      width: 900,
      height: 350,
      alt: 'random',
    }}
    // bottom={<div className={styles.label}>Trendy star name</div>}
  />
));

export const CompanyCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Company Photo</h2>
      <Carousal className={styles.carousal} variant="dark" hidePagination>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <div className={styles.content}>{images}</div>
            </div>
          ))}
      </Carousal>
    </div>
  );
};
