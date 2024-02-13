import { ImageCard } from '@li/design/components';
import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import prodStyles from './product.module.css';
import styles from './celeb.module.css';

const products = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => (
  <ImageCard
    className={clsx(prodStyles.card)}
    image={{
      src: src,
      width: 400,
      height: 400,
      alt: 'random',
    }}
    imageClassName={prodStyles.image}
  />
));

export const Celeb = () => {
  return (
    <div>
      <SectionHeader sectionName="Celebrity Designers" />
      <ScrollableSnap className={styles.carousal} delta={200} controls>
        {products}
      </ScrollableSnap>
    </div>
  );
};
