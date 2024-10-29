import { grid } from '@li/config/design';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { Carousel } from 'react-responsive-carousel';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => (
  <ProductCard src={src} tag="READY TO SHIP" key={src} />
));

export const InternationalCeleb = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="International Celebrity Designers" />
      <Carousel>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
      </Carousel>
    </div>
  );
};
