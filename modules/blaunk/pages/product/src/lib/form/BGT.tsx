'use client';
import { FormDocumentSection, FormSection } from '@li/design/elements';
import {
  BGTImageSection,
  BGTProductDetails,
  CompanyProfile,
  Export,
  ProductSpecification,
} from '@md/blaunk/config';
import { QuantitySection } from './QuantitySection';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';

const dummyData = [
  {
    qty: 1,
    price: 1,
    priceDollar: 1,
  },
  {
    qty: 2,
    price: 2,
    priceDollar: 2,
  },
  {
    qty: 3,
    price: 3,
    priceDollar: 3,
  },
  {
    qty: 4,
    price: 4,
    priceDollar: 4,
  },
  {
    qty: 5,
    price: 5,
    priceDollar: 5,
  },
];

const specifications = [Export, ProductSpecification, CompanyProfile];

export const BGT = () => {
  return (
    <>
      <FormSection {...BGTProductDetails} isEdit />
      <QuantitySection data={dummyData} />
      <FormDocumentSection isEdit section={BGTImageSection} />
      {specifications.map((section) => (
        <FormSection {...section} isEdit expandable />
      ))}

      <Disclaimer />
      <FormAction />
    </>
  );
};
