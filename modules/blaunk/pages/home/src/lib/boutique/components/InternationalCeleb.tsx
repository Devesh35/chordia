import { grid } from '@li/config/design';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => (
  <ProductCard src={src} action="SHOP NOW" tag="READY TO SHIP" />
));

export const InternationalCeleb = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="International Celebrity Designers" />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
    </div>
  );
};
