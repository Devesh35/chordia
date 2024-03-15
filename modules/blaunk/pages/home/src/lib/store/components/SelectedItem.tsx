import { Carousal } from '@li/design/elements';
import styles from './selected-item.module.css';
import Image from 'next/image';
import { Placeholder } from '../../base/components/Placeholder';
import { StoreItem } from '../Store';

type Props = {
  data: StoreItem;
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
          {/* <ProductInfo data={data} /> */}
          <div className={styles['product-info-right']}>
            {/* <OrderEstimate data={data.priceList} title="Order estimates" /> */}
          </div>
        </div>
      </div>
      <Placeholder height={64} />
      <div className={styles['ps-wrapper']}></div>
    </div>
  );
};
