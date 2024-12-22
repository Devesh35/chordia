'use client';

import { Button, ScrollableSnap } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import { useRouter } from 'next/navigation';
import { sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = (isMobile: boolean) =>
  getRandomImagesArray(12)(600, 500, 'saree').map((src, i) => (
    <ProductCard src={src} action="yes" tag="FOR RENT" col="col-4" width={300} height={400} key={src} style />
  ));

export const StyleOnRent = () => {
  const router = useRouter();
  const isMobile = useMedia();
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames.rent} />
      <ScrollableSnap className={styles['rent-products']} controls>
        {products(isMobile)}
      </ScrollableSnap>
      {/* <div className={clsx(grid.grid, styles.grid)}>{products}</div> */}
      <div className={styles['view-all']}>
        <Button onClick={() => router.push(Routes.home.boutique.rent.path)}>View all</Button>
      </div>
    </div>
  );
};
