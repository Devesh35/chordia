import { grid } from '@li/config/design';
import { ImageCard } from '@li/design/components';
import { Star, Veg } from '@li/design/icons';
import { ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import styles from './product-card.module.css';

type Props = {
  src: string;
  topLeft?: string;
  details: {
    isVeg?: boolean;
    name: string;
    price?: string;
    rating: string;
    reviewCount: string;
  };
};

export const ProductCard = ({ src, topLeft, details }: Props) => {
  return (
    <ImageCard
      className={clsx(grid['col-2'], grid['col-t-4'], grid['col-m-6'], 'clickable')}
      image={{
        src: src,
        width: 300,
        height: 300,
        alt: 'random',
      }}
      topLeft={topLeft ? <div className={styles['card-tag']}>{topLeft}</div> : undefined}
      details={
        <div className={styles.details}>
          {details.isVeg !== undefined && <Veg width={24} height={24} />}
          <div className={styles['name-wrapper']}>
            <div className={styles['card-name']}>{details.name}</div>
            <div className={styles.price}>{details.price}</div>
          </div>
          <div className={styles['rating-wrapper']}>
            <div className={styles.rating}>
              4.5 <Star fill="var(--secondary)" width={16} height={16} />
            </div>
            <span className={styles['review-count']}>{details.reviewCount} Reviews</span>
          </div>
        </div>
      }
    />
  );
};

export const ProductWrapper = ({ children }: ReactChildren) => (
  <div className={clsx(grid.grid, grid['grid-12'], styles.grid)}>{children}</div>
);
