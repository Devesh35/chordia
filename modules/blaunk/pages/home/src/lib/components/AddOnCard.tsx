import {
  Button,
  EnlargeableImage,
  EnlargeableImageProps,
} from '@li/design/elements';
import styles from './add-on-card.module.css';
import clsx from 'clsx';
import { QuantitySelector } from '@li/design/components';

type AddOnCardProps = {
  image: EnlargeableImageProps;
  items: [string, string][];
};

export const AddOnCard = ({ image, items }: AddOnCardProps) => {
  return (
    <div className={styles.card}>
      <EnlargeableImage {...image} />
      <div className={clsx(styles.item)}>
        <span>Quantity</span>
        <span className={styles.quantity}>
          <QuantitySelector max={20} />
        </span>
      </div>
      {items.map(([label, value]) => (
        <div key={label} className={styles.item}>
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
      <Button variant="secondary">Add to cart</Button>
    </div>
  );
};
