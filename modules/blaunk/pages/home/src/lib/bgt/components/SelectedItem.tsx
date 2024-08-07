import { ScrollableSnap } from '@li/design/elements';
import { ProductDescription } from './ProductDescription';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductSpecs } from './ProductSpecs';
import { OrderEstimate } from './QuantitySection';
import { ReturnPolicy } from './ReturnPolicy';
import { CurrencyType, TData } from './SearchTable';
import styles from './selected-item.module.css';

type Props = {
  data: TData;
  currency: CurrencyType;
};

export const SelectedItem = ({ data, currency }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ScrollableSnap className={styles.content} controls delta={120}>
        <ProductImage data={data.images} name={data.name} />
        <ProductInfo data={data} />
        <ProductDescription />
        <OrderEstimate
          currency={currency}
          data={data.priceList}
          title="Order estimates"
        />
      </ScrollableSnap>
      <div className={styles['ps-wrapper']}>
        <ScrollableSnap controls delta={200}>
          <ProductSpecs />
          <ReturnPolicy />
        </ScrollableSnap>
      </div>
    </div>
  );
};
