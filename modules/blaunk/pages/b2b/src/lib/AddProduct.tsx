'use client';

import { useState } from 'react';
import { ProductTypeOptions } from '@md/blaunk/config';
import { Select } from '@li/design/elements';
import styles from './add-product.module.css';
import { withConditionCase } from '@li/design/enhancers';
import { AddTour } from './components/AddTour';
import { AddCake } from './components/AddCake';
import { AddBoutique } from './components/AddBoutique';
import { AddB2B } from './components/AddB2b';

export const AddProduct = () => {
  const [productType, setProductType] = useState(ProductTypeOptions[0]);

  return (
    <>
      <div className={styles['select-wrapper']}>
        Select a category to add the product:{' '}
        <Select
          onChange={(item) => (item ? setProductType(item) : {})}
          options={ProductTypeOptions}
          defaultItem={ProductTypeOptions[0]}
        />
      </div>
      {withConditionCase(productType.id)({
        B2B: <AddB2B />,
        Tour: <AddTour />,
        Cake: <AddCake />,
        Boutique: <AddBoutique />,
      })}
    </>
  );
};
