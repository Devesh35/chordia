import { Divider, Rating } from '@li/design/elements';
import { ImageCardDetails } from '../image';
import styles from './review.module.css';
// circular deps
export const randomImageUrl = (height: number, width?: number, category?: string) =>
  `https://picsum.photos/${width || height}/${height}`;

export const ReviewCard = ({ i }: { i: number }) => (
  <div className={styles.wrapper}>
    <div className={styles.country}>
      <div style={{ color: 'red' }}>02-02-2025</div> <div>IN</div>
    </div>
    <ImageCardDetails
      image={{
        src: randomImageUrl(60, 60),
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
      This is the review from the review section This is the review from the review section This is the review from the
      review section This is the review from the review section
    </div>
    <div
      className={styles.review}
      style={{
        gap: '4px',
        display: 'flex',
        marginTop: '48px',
        flexDirection: 'column',
      }}
    >
      <div>Post: 12-02-2025</div>
      <Divider />
      <div> This is the review from the review section from blaunk</div>
    </div>
  </div>
);
