'use client';

import { grid } from '@li/config/design';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { isAd, sectionNames } from './config';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(24)(400, 400, 'saree').map((src, i) => (
  <ProductCard src={src} action="SHOP NOW" tag="READY TO SHIP" key={src} />
));
const productsAd = getRandomImagesArray(12)(400, 400, 'saree').map((src, i) => <ProductCard src={src} key={src} />);

export const BType = () => {
  const { type } = useParams() as { type: keyof typeof sectionNames };

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName={sectionNames[type] || sectionNames.rent} />
      <div className={clsx(grid.grid, styles.grid)}>{isAd.includes(type) ? productsAd : products}</div>
    </div>
  );
};
