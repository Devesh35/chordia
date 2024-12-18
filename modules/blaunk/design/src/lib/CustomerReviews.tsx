import { grid } from '@li/config/design';
import { ReviewCard } from '@li/design/components';
import { ScrollableSnap } from '@li/design/elements';
import clsx from 'clsx';
import styles from './customer.module.css';

export const CustomerReviews = () => {
  return (
    <div className={clsx(styles.wrapper, grid['col-12'])}>
      <div className={styles.heading}>Customer speaks</div>
      <ScrollableSnap controls delta={200} className={styles['carousal-wrapper']}>
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <ReviewCard i={3 * i} key={i + 0} />
          ))}
      </ScrollableSnap>
    </div>
  );
};
