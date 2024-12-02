'use client';

import { PaginationNumber } from '@li/design/elements';
import { useState } from 'react';
import styles from './page.module.css';

export const PaginationBlaunk = () => {
  const [a, setA] = useState(0);

  return (
    <div className={styles['pagination-wrapper']}>
      <PaginationNumber active={a} total={4} position="none" variant="light" onChange={(num) => setA(num)} />
    </div>
  );
};
