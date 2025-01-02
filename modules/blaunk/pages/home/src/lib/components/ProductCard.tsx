import { grid } from '@li/config/design';
import { ImageCard } from '@li/design/components';
import { withConditionCase } from '@li/design/enhancers';
import { useMedia } from '@li/design/hooks';
import { Star, Veg } from '@li/design/icons';
import { ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import styles from './product-card.module.css';

type Props = {
  type?: 'cake' | 'store' | 'other';
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

const Rating = ({ isMobile }: { isMobile: boolean }) => (
  <div className={styles['rating-wrapper']}>
    <div className={styles.rating}>
      4.5 <Star fill="var(--secondary)" width={isMobile ? 12 : 16} height={isMobile ? 12 : 16} />
    </div>
  </div>
);

export const ProductCard = ({ type = 'other', src, topLeft, details }: Props) => {
  const isMobile = useMedia();

  return (
    <ImageCard
      hover
      className={clsx(grid['col-2'], grid['col-t-4'], grid['col-m-3'], 'clickable')}
      image={{
        src: src,
        width: 600,
        height: isMobile ? 120 : 160,
        alt: 'random',
      }}
      topHeart
      topLeft={topLeft ? <div className={styles['card-tag']}>{topLeft}</div> : undefined}
      details={
        <div className={clsx(styles.details, styles['details-' + type])}>
          {details.isVeg !== undefined && <Veg width={24} height={24} />}
          <div className={styles['name-wrapper']}>
            <div className={styles['card-name']}>{details.name}</div>
            {/* {!isMobile && <div className={clsx(styles.price, styles['price-' + type])}>{details.price}</div>} */}
            {withConditionCase(type)({
              cake: (
                <div className={clsx(styles.price, styles['price-' + type])}>
                  {details.price}
                  <Rating isMobile={isMobile} />
                </div>
              ),
              store: (
                <div className={clsx(styles.price, styles['price-cake'])}>
                  <span className={styles.time}>9:00 am - 12:00 pm</span>
                  <Rating isMobile={isMobile} />
                </div>
              ),

              other: null,
            })}
          </div>
          {/* {isMobile ? null : (
            <div className={styles['rating-wrapper']}>
              <div className={styles.rating}>
                4.5 <Star fill="var(--secondary)" width={isMobile ? 12 : 16} height={isMobile ? 12 : 16} />
              </div>
              <span className={styles['review-count']}>{details.reviewCount} Reviews</span>
            </div>
          )} */}
        </div>
      }
    />
  );
};

export const ProductWrapper = ({ children }: ReactChildren) => (
  <div className={clsx(grid.grid, grid['grid-12'], styles.grid)}>{children}</div>
);
