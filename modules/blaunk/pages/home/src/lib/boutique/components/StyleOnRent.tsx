'use client';

import { Button, ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray, Routes } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import { useRouter } from 'next/navigation';
import { sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 500, 'saree').map((src, i) => (
  <ProductCard src={src} action="View more" tag="FOR RENT" col="col-4" width={300} key={src} />
));

export const StyleOnRent = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames.rent} />
      <ScrollableSnap className={styles['rent-products']} controls>
        {products}
      </ScrollableSnap>
      {/* <div className={clsx(grid.grid, styles.grid)}>{products}</div> */}
      <div className={styles['view-all']}>
        <Button onClick={() => router.push(Routes.home.boutique.rent.path)}>View all</Button>
      </div>
    </div>
  );
};
