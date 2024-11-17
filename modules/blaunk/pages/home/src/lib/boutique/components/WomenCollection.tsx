'use client';

import { grid } from '@li/config/design';
import { Button } from '@li/design/elements';
import { getRandomImagesArray, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(600, 600, 'saree').map((src, i) => (
  <ProductCard src={src} action="SHOP NOW" tag="READY TO SHIP" key={src} />
));

export const WomenCollection = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames.women} />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
      <div className={styles['view-all']}>
        <Button onClick={() => router.push(Routes.home.boutique.women.path)}>View all</Button>
      </div>
    </div>
  );
};
