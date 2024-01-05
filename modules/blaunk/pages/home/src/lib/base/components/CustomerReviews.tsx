import { ReviewCard } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import styles from './customer.module.css';

export const CustomerReviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Customer speaks</div>
      <div className={styles['carousal-wrapper']}>
        <Carousal>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div className={styles['review-group']} key={i}>
                <ReviewCard i={3 * i + 0} key={i + 0} />
                <ReviewCard i={3 * i + 1} key={i + 1} />
                <ReviewCard i={3 * i + 2} key={i + 2} />
                <ReviewCard i={3 * i + 3} key={i + 3} />
              </div>
            ))}
        </Carousal>
      </div>
    </div>
  );
};
