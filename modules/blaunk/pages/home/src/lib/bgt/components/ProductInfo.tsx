import { InputArea, Labeled, Rating } from '@li/design/elements';
import { TData } from './SearchTable';
import styles from './selected-item.module.css';
import Image from 'next/image';
import { assurance, getStaticImageSrc } from '@li/design/icons';
import { DetailsTable } from '../../components';

import clsx from 'clsx';

type Props = {
  data: TData;
};

export const ProductInfo = ({ data }: Props) => {
  return (
    <div className={styles['product-info-left']}>
      <div
        className={clsx(
          'flex',
          'no-shrink',
          'justify-content-between',
          'align-items-center',
        )}
      >
        <div className={clsx('no-shrink')}>
          <Image
            src={getStaticImageSrc(assurance)}
            width={120}
            height={40}
            alt="BK Assurance"
          />
        </div>
        <div className={clsx('flex', 'no-shrink')}>
          <Rating rating={data.rating} />
          <span>{data.reviews}+ Reviews</span>
        </div>
      </div>
      <div className={styles.name}>{data.name}</div>
      <div className={styles['product-info-origin']}>
        <DetailsTable
          data={[
            ['Origin', data.origin],
            ['State', data.state],
            ['Type', data.type],
          ]}
        />
      </div>
      <Labeled label="Description">
        <InputArea placeholder="Max 250 characters" height={240} />
      </Labeled>
    </div>
  );
};
