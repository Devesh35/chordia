import { Rating } from '@li/design/elements';
import { assurance, getStaticImageSrc } from '@li/design/icons';
import Image from 'next/image';
import { DetailsTable } from '../../components';
import { TData } from './SearchTable';
import styles from './selected-item.module.css';

import { Share } from '@md/blaunk/design';
import clsx from 'clsx';

type Props = {
  data: TData;
};

export const ProductInfo = ({ data }: Props) => {
  return (
    <div className={styles['product-info']}>
      <div className={styles.name}>{data.name}</div>
      <DetailsTable
        data={[
          ['Company code', 'CWM1524'],
          ['Company name', 'CWM'],
          ['City', 'Bangalore'],
          ['Origin', data.origin],
          ['State', data.state],
          ['Type', data.type],
          ['Size-chart', 'chart.pdf'],
          [
            'Membership',
            <div className={clsx('no-shrink')}>
              <Image
                src={getStaticImageSrc(assurance)}
                width={120}
                height={40}
                alt="BK Assurance"
              />
            </div>,
          ],
          [
            'Rating',
            <div className={clsx('flex', 'no-shrink')}>
              <Rating rating={data.rating} />
              <span>{data.reviews}+ Reviews</span>
            </div>,
          ],
          ['Complaints', 4],
          ['Resolved issue', 3],
        ]}
      />
      <Share />
    </div>
  );
};
