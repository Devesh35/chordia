import { ImageCard } from '@li/design/components';
import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import styles from './celeb.module.css';
import prodStyles from './product.module.css';

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

export const InternationalCeleb = () => {
  return (
    <div>
      <SectionHeader sectionName="International Celebrity Designers" />
      <ScrollableSnap className={styles.carousal} delta={200} controls>
        {products}
      </ScrollableSnap>
    </div>
  );
};
