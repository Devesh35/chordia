import { ImageCard } from '@li/design/components';
import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './certificate-carousel.module.css';
import certificateStyles from './certificate.module.css';

const products = getRandomImagesArray(12)(400, 250, 'saree').map((src, i) => (
  <ImageCard
    className={clsx(certificateStyles.card)}
    image={{
      src: src,
      width: 400,
      height: 400,
      alt: 'random',
    }}
    imageClassName={certificateStyles.image}
  />
));

export const CertificateCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <h2 color="var(--primary)">Certificate Images</h2>
      <ScrollableSnap className={styles.carousal} delta={200} controls>
        {products}
      </ScrollableSnap>
    </div>
  );
};
