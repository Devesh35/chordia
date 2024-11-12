import { grid } from '@li/config/design';
import { Button } from '@li/design/elements';
import { getRandomImagesArray, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 400, 'jeans').map((src, i) => (
  <ProductCard src={src} action="JEANS" key={src} />
));

export const MenCollection = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames.men} />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
      <div className={styles['view-all']}>
        <Button onClick={() => router.push(Routes.home.boutique.men.path)}>View all</Button>
      </div>
    </div>
  );
};
