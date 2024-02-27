import { ImageCard } from '@li/design/components';
import styles from './product.module.css';
import clsx from 'clsx';
import { grid } from '@li/config/design';
import { Button } from '@li/design/elements';

type Props = {
  src: string;
  tag?: string;
  action?: string;
  col?: string;
  width?: number;
  height?: number;
};

export const ProductCard = ({
  src,
  tag,
  action,
  col = 'col-3',
  width,
  height,
}: Props) => {
  return (
    <ImageCard
      className={clsx(styles.card, grid[col])}
      image={{
        src: src,
        width: width || 400,
        height: height || 400,
        alt: 'random',
      }}
      imageClassName={styles.image}
      topRight={tag ? <div className={styles['card-tag']}>{tag}</div> : null}
      details={
        action ? (
          <Button variant="secondary" className={styles.shop}>
            {action}
          </Button>
        ) : null
      }
    />
  );
};
