import {
  Carousal,
  FormConfigProvider,
  FormSection,
  InputArea,
  Labeled,
  Rating,
} from '@li/design/elements';
import { TData } from './SearchTable';
import styles from './selected-item.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { QuantitySection } from './QuantitySection';
import { AddProductSpecifications } from '@md/blaunk/config';

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
          <div className={styles['product-info-left']}>
            <div
              className={clsx('flex', 'no-shrink', 'justify-content-between')}
            >
              <div className={clsx('no-shrink')}>BK Assurance</div>
              <div className={clsx('flex', 'no-shrink')}>
                <Rating rating={data.rating} />
                <span>{data.reviews}+ Reviews</span>
              </div>
            </div>
            <div className={styles.name}>{data.name}</div>
            <div className={styles['product-info-origin']}>
              <div>
                <label>Origin</label>
                <span>{data.origin}</span>
              </div>
              <div>
                <label>State</label>
                <span>{data.state}</span>
              </div>
              <div>
                <label>Type</label>
                <span>{data.type}</span>
              </div>
            </div>
            <div>
              <Labeled label="Description">
                <InputArea placeholder="Max 250 characters" />
              </Labeled>
            </div>
          </div>
          <div className={styles['product-info-right']}>
            <QuantitySection data={data.priceList} title="Order estimates" />
          </div>
        </div>
      </div>
      <div>
        <FormConfigProvider hasBG>
          <FormSection section={AddProductSpecifications} selected="options" />
        </FormConfigProvider>
      </div>
    </div>
  );
};
