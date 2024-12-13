import { Divider, Rating } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { arrow_left, getStaticImageSrc, India } from '@li/design/icons';
import Image from 'next/image';
import { ImageCardDetails } from '../image';
import styles from './review.module.css';
// circular deps
export const randomImageUrl = (height: number, width?: number, category?: string) =>
  `https://picsum.photos/${width || height}/${height}`;

export const ReviewCard = ({ i }: { i: number }) => {
  const isMobile = useMedia('mobile');

  return (
    <div className={styles.wrapper}>
      <div className={styles.country}>
        <div>02-02-2025</div>{' '}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <India width={isMobile ? 12 : 20} height={isMobile ? 12 : 20} />
          IN
        </div>
      </div>
      <ImageCardDetails
        image={{
          src: randomImageUrl(60, 60),
          width: isMobile ? 40 : 60,
          height: isMobile ? 40 : 60,
          alt: 'random',
        }}
        details={
          <div className={styles.details}>
            <Rating rating={4} hasHalf size={isMobile ? 'small' : 'medium'} />
            <span className={styles.premium}>Premium</span>
          </div>
        }
      />
      <div className={styles.username}>C&amp;D Retail India LLP</div>
      <div className={styles.review}>
        This is the review from the review section This is the review from the review section This is the review from
        the review section This is the review from the review section
      </div>
      <div className={styles.review3}>
        <Divider />
        <div className={styles.review2}>
          <Image src={getStaticImageSrc(arrow_left)} width={isMobile ? 8 : 14} height={isMobile ? 8 : 14} alt="reply" />
          <div>This is the review from the review section from blaunk. This is the review from the review section</div>
        </div>
      </div>
    </div>
  );
};
