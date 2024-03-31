import { Carousal } from '@li/design/elements';
import { PolicyRow } from '@md/blaunk/design';
import Image from 'next/image';
import { ProductInfo } from './ProductInfo';
import { ProductSpecs } from './ProductSpecs';
import { OrderEstimate } from './QuantitySection';
import { CurrencyType, TData } from './SearchTable';
import styles from './selected-item.module.css';

type Props = {
  data: TData;
  currency: CurrencyType;
};

export const SelectedItem = ({ data, currency }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['product-details']}>
        <div className={styles['product-image']}>
          <Carousal>
            {data.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                width={600}
                height={600}
                alt={data.name}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </Carousal>
        </div>
        <div className={styles['product-info']}>
          <ProductInfo data={data} />
          <div className={styles['product-info-right']}>
            <OrderEstimate
              currency={currency}
              data={data.priceList}
              title="Order estimates"
            />
          </div>
        </div>
      </div>
      <PolicyRow />
      <div className={styles['ps-wrapper']}>
        <ProductSpecs />
      </div>
    </div>
  );
};
