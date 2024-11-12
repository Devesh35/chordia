import { grid } from '@li/config/design';
import { Button } from '@li/design/elements';
import { getRandomImagesArray, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { Carousel } from 'react-responsive-carousel';
import { sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => <ProductCard src={src} key={src} />);

export const IndianCeleb = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames.indian} />
      <Carousel>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
        <div className={clsx(grid.grid, styles.grid)}>{products}</div>
      </Carousel>{' '}
      <div className={styles['view-all']}>
        <Button onClick={() => router.push(Routes.home.boutique.indian.path)}>View all</Button>
      </div>
    </div>
  );
};
