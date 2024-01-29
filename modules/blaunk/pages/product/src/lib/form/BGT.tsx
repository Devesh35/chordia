'use client';

import { FormConfigProvider, FormSection } from '@li/design/elements';
import { AddProductSpecifications, BGTProductDetails } from '@md/blaunk/config';
import { QuantitySection } from './QuantitySection';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';
import { useState } from 'react';
import styles from './common.module.css';

export type QuantityType = {
  id: string;
  qty?: number;
  price?: number;
  priceDollar?: number;
};

export const BGT = () => {
  const [data, setData] = useState<QuantityType[]>([]);

  return (
    <FormConfigProvider isEdit hasBG>
      <FormSection section={BGTProductDetails} selected={'product-details'} />
      <div className={styles.half}>
        <QuantitySection data={data} onChange={setData} title="Quantity" />
      </div>
      <FormSection section={BGTProductDetails} selected={'product-image'} />
      <FormSection section={AddProductSpecifications} selected="options" />
      <Disclaimer />
      <FormAction />
    </FormConfigProvider>
  );
};
