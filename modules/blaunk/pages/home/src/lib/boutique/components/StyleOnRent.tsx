import { grid } from '@li/config/design';
import { SectionHeader } from '@md/blaunk/design';
import styles from './just-dropped.module.css';
import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(3)(400, 500, 'saree').map((src, i) => (
  <ProductCard
    src={src}
    action="View more"
    tag="FOR RENT"
    col="col-4"
    width={500}
  />
));

export const StyleOnRent = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="STYLE ON RENT" />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
    </div>
  );
};
