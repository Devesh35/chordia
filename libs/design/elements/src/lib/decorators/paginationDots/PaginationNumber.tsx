'use client';

import clsx from 'clsx';
import styles from './pagination-dots.module.css';

type PaginationPosition = 'top' | 'left' | 'bottom' | 'right' | 'none';

type Props = {
  total: number;
  active: number;
  variant?: 'light' | 'dark';
  position: PaginationPosition;
  onChange?: (index: number) => void;
};

export const PaginationNumber = ({ position, active, total, variant = 'light', onChange }: Props) => {
  return (
    <div className={clsx(styles.wrapper, styles[position], styles[variant])}>
      <div className={clsx(styles.dots)}>
        {Array(total)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={clsx(
                {
                  [styles['active-number']]: active === i,
                },
                styles.number,
              )}
              onClick={() => onChange?.(i)}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
};
