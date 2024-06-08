'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './quantity-selector.module.css';

type Props = {
  max: number;
  dx?: number;
};

export const QuantitySelector = ({ max, dx = 1 }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const update = (dx: number) => () =>
    setQuantity((q) => Math.min(Math.max(q + dx, 0), max));

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.item, styles.button)} onClick={update(-dx)}>
        -
      </div>
      <div className={clsx(styles.item, styles.quantity)}>{quantity}</div>
      <div className={clsx(styles.item, styles.button)} onClick={update(dx)}>
        +
      </div>
    </div>
  );
};
