import { grid } from '@li/config/design';
import { SectionHeader } from '@md/blaunk/design';
import styles from './just-dropped.module.css';
import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => (
  <ProductCard src={src} action="WEDDING" />
));

export const PickYourStyle = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="PICK YOUR STYLE" />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
    </div>
  );
};
