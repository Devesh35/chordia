'use client';

import clsx from 'clsx';
import styles from './moveControl.module.css';
import { AngleLeft, AngleRight } from '@li/design/icons';
import { useThrottle } from '@li/design/hooks';

type Props = {
  size?: 'large' | 'small';
  variant?: 'light' | 'dark';
  onChange: (dx: number) => void;
};

export const MoveControl = ({ size, variant = 'light', onChange }: Props) => {
  const throttledOnChange = useThrottle(onChange, 500);

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.item, styles[variant], {
          [styles.large]: size === 'large',
        })}
        onClick={() => throttledOnChange(-1)}
      >
        <AngleLeft />
      </div>
      <div
        className={clsx(styles.item, styles[variant], {
          [styles.large]: size === 'large',
        })}
        onClick={() => throttledOnChange(1)}
      >
        <AngleRight />
      </div>
    </div>
  );
};
