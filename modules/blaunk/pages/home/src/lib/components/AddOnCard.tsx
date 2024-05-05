import { QuantitySelector } from '@li/design/components';
import {
  Button,
  EnlargeableImage,
  EnlargeableImageProps,
  Select,
} from '@li/design/elements';
import { QuantityOptions } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './add-on-card.module.css';

type AddOnCardProps = {
  image: EnlargeableImageProps;
  items: [string, string][];
  quantityDropDown?: boolean;
};

export const AddOnCard = ({
  image,
  items,
  quantityDropDown = false,
}: AddOnCardProps) => {
  return (
    <div className={styles.card}>
      <EnlargeableImage {...image} />
      <div className={clsx(styles.item)}>
        <span>Quantity</span>
        <span className={styles.quantity}>
          {quantityDropDown ? (
            <Select options={QuantityOptions} maxHeight={200} />
          ) : (
            <QuantitySelector max={20} />
          )}
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
