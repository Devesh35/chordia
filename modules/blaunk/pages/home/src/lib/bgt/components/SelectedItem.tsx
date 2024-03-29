import { Carousal } from '@li/design/elements';
import { TData } from './SearchTable';
import styles from './selected-item.module.css';
import Image from 'next/image';
import { OrderEstimate } from './QuantitySection';
import { ProductInfo } from './ProductInfo';
import { ProductPS } from './ProductPS';
import { PolicyRow } from './PolicyRow';

type Props = {
  data: TData;
};

export const SelectedItem = ({ data }: Props) => {
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
            <OrderEstimate data={data.priceList} title="Order estimates" />
          </div>
        </div>
      </div>
      <PolicyRow />
      <div className={styles['ps-wrapper']}>
        <ProductPS />
      </div>
    </div>
  );
};
