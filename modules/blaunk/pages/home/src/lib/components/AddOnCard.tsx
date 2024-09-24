import { QuantitySelector } from '@li/design/components';
import { Button, EnlargeableImage, EnlargeableImageProps, Input, Select } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { QuantityOptions } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './add-on-card.module.css';

type AddOnCardProps = {
  image: EnlargeableImageProps;
  items: [string, React.ReactNode][];
  name: string;
  quantitySelect?: boolean;
  quantityDropDown?: boolean;
  weightSelect?: boolean;
  weightQuantityRow?: boolean;
  actionRow?: React.ReactNode;
};

const options = [
  {
    id: '1',
    item: '1 Kg',
  },
  {
    id: '2',
    item: '2 Kg',
  },
  {
    id: '3',
    item: '3 Kg',
  },
  {
    id: '4',
    item: '4 Kg',
  },
  {
    id: '5',
    item: '5 Kg',
  },
];

export const AddOnCard = ({
  image,
  items,
  name,
  quantityDropDown = false,
  quantitySelect = false,
  weightSelect = false,
  actionRow,
  weightQuantityRow,
}: AddOnCardProps) => {
  return (
    <div className={styles.card}>
      <EnlargeableImage {...image} />
      <div className={styles.item}>
        <span>{name}</span>
      </div>
      {withCondition(quantitySelect)(
        <div className={clsx(styles.item)}>
          <span>Quantity</span>
          <span className={styles.quantity}>
            {quantityDropDown ? <Select options={QuantityOptions} maxHeight={200} /> : <QuantitySelector max={20} />}
          </span>
        </div>,
      )}
      {withCondition(weightSelect)(
        <div className={styles.item}>
          <span>Weight/Units</span>
          <span className={styles.quantity}>
            <Input type="number" placeholder="0" className={styles.input} />
            {/* <QuantitySelectorDropdown maxHeight={140} options={options} /> */}
          </span>
        </div>,
      )}
      {withCondition(weightQuantityRow)(
        <div className={styles.item}>
          <span className={styles.quantity}>
            <Select options={options} maxHeight={140} />{' '}
          </span>
          <span className={styles.quantity}>
            <Input type="number" placeholder="0" className={styles.input} />
          </span>
        </div>,
      )}

      {items.map(([label, value], index) => (
        <div key={label} className={clsx(styles.item)}>
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}

      {actionRow || <Button variant="secondary">Add to cart</Button>}
    </div>
  );
};
