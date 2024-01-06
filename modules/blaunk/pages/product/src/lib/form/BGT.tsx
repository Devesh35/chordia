import { Button, FormSection } from '@li/design/elements';
import {
  BGTProductDetails,
  CompanyProfile,
  Export,
  ProductSpecification,
} from '@md/blaunk/config';
import styles from './bgt.module.css';
import { QuantityTable } from './QuantityTable';
import { CancelForm } from './CancelForm';

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
      <FormSection title="Product pricing">
        <div className={styles.quantity}>
          <QuantityTable data={dummyData} />
          <Button className={styles['add-row-button']}>Add quantity</Button>
        </div>
      </FormSection>
      {specifications.map((section) => (
        <FormSection {...section} isEdit expandable />
      ))}
      <div className={styles.action}>
        <CancelForm />
        <Button>Save</Button>
      </div>
    </>
  );
};
