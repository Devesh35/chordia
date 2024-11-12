'use client';

import { Dot } from '@li/design/icons';
import clsx from 'clsx';
import styles from './pagination-dots.module.css';

const paginationGap = 8;
const paginationDotSize = 12;
type PaginationPosition = 'top' | 'left' | 'bottom' | 'right' | 'none';

type Props = {
  total: number;
  active: number;
  variant?: 'light' | 'dark';
  position: PaginationPosition;
  onChange?: (index: number) => void;
};

const horizontal: PaginationPosition[] = ['bottom', 'top', 'none'];

export const PaginationNumber = ({ position, active, total, variant = 'light', onChange }: Props) => {
  const v = `${active * (paginationGap + paginationDotSize)}px`;

  return (
    <div className={clsx(styles.wrapper, styles[position], styles[variant])}>
      <div className={clsx(styles.dots)}>
        {Array(total)
          .fill(0)
          .map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
      </div>
      <div
        className={styles.active}
        style={{
          transform: `translate(${horizontal.includes(position) ? `${v}, 0` : `0, ${v}`})`,
        }}
      >
        <Dot className={clsx(styles.dot, styles['dot-filled'])} />
      </div>
    </div>
  );
};
