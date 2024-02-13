import {
  Button,
  EnlargeableImage,
  EnlargeableImageProps,
  Select,
} from '@li/design/elements';
import styles from './add-on-card.module.css';
import { SelectItemElement } from '@li/types/design';
import clsx from 'clsx';

type AddOnCardProps = {
  image: EnlargeableImageProps;
  items: [string, string][];
};

const options: SelectItemElement<string>[] = Array.from(
  { length: 3 },
  (_, i) => ({
    id: `${i + 1}`,
    item: `${i + 1}`,
  }),
);

export const AddOnCard = ({ image, items }: AddOnCardProps) => {
  return (
    <div className={styles.card}>
      <EnlargeableImage {...image} />
      <div className={clsx(styles.item)}>
        <span>Quantity</span>
        <span className={styles.quantity}>
          <Select options={options} />
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
