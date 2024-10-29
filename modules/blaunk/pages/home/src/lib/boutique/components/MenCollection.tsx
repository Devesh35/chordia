import { grid } from '@li/config/design';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { Carousel } from 'react-responsive-carousel';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'jeans').map((src, i) => (
  <ProductCard src={src} action="JEANS" key={src} />
));

export const MenCollection = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="MEN'S COLLECTION" />
      <Carousel>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
      </Carousel>
    </div>
  );
};
