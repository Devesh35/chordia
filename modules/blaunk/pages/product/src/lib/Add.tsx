'use client';

import { Labeled, Select } from '@li/design/elements';
import { ProductTypeOptions, Routes } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';
import styles from './add.module.css';
import { Disclaimer } from './form/Disclaimer';

export const Add = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <Labeled label="Select product type to add:" inline className={styles['select-type']}>
        <Select
          options={ProductTypeOptions}
          onChange={(value) => value && router.push(Routes.product.add[value.id].path)}
        />
      </Labeled>
      <Disclaimer />
    </div>
  );
};
