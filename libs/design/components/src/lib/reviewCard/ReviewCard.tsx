import { Rating } from '@li/design/elements';
import { ImageCardDetails } from '../imageCard';
import styles from './review.module.css';

export const ReviewCard = ({ i }: { i: number }) => (
  <div className={styles.wrapper}>
    <div className={styles.country}>IN</div>
    <ImageCardDetails
      image={{
        src: `https://source.unsplash.com/random/60x${90 + i}`,
        width: 60,
        height: 60,
        alt: 'random',
      }}
      details={
        <div className={styles.details}>
          <Rating rating={4} hasHalf />
          <span className={styles.premium}>Premium</span>
        </div>
      }
    />
    <div className={styles.username}>C&amp;D Retail India LLP</div>
    <div className={styles.review}>
      This is the review from the review section This is the review from the
      review section This is the review from the review section This is the
      review from the review section This is the review from the review section
    </div>
  </div>
);
