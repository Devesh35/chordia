'use client';

import { FormFormSection, FormSection } from '@li/design/elements';
import {
  BGTProductDetails,
  CompanyProfile,
  Export,
  ProductSpecification,
} from '@md/blaunk/config';
import { QuantitySection } from './QuantitySection';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';
import { useState } from 'react';

export type QuantityType = {
  id: string;
  qty?: number;
  price?: number;
  priceDollar?: number;
};
const specifications = [Export, ProductSpecification, CompanyProfile];

export const BGT = () => {
  const [data, setData] = useState<QuantityType[]>([]);

  return (
    <>
      <FormSection
        isEdit
        section={BGTProductDetails}
        selected={'product-details'}
      />
      <QuantitySection data={data} onChange={setData} />
      <FormSection
        isEdit
        section={BGTProductDetails}
        selected={'product-image'}
      />
      {specifications.map((section) => (
        <FormFormSection {...section} isEdit expandable />
      ))}

      <Disclaimer />
      <FormAction />
    </>
  );
};
