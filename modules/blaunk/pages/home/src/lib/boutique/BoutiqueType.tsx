'use client';
import { PaginationNumber } from '@li/design/elements';
import { useState } from 'react';
import styles from './boutique.module.css';
import { BoutiqueSearch } from './components/BoutiqueSearch';
import { BType } from './components/Type';

export const BoutiqueType = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles['top-offer']}>BUY 2 GET 1 LIMITED OFFER</div>
      {/* <TopSlider /> */}
      <div className="mt-4">
        <BoutiqueSearch />
      </div>
      <BType />
      <div
        style={{
          position: 'relative',
          height: '100px',
        }}
      >
        <PaginationNumber active={page} onChange={setPage} position="top" total={4} />
      </div>
    </div>
  );
};
