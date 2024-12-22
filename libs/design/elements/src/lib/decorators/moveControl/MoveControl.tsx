'use client';

import { withConditionCase } from '@li/design/enhancers';
import { useThrottle } from '@li/design/hooks';
import { AngleLeft, AngleRight, double_arrow_left, getStaticImageSrc } from '@li/design/icons';
import { ClassName } from '@li/types/shared';
import clsx from 'clsx';
import styles from './moveControl.module.css';

type Props = {
  size?: 'large' | 'small';
  variant?: 'light' | 'dark';
  onChange: (dx: number) => void;
  arrows?: 'single' | 'double';
} & Partial<ClassName>;

export const MoveControl = ({ size, variant = 'light', onChange, className, arrows = 'single' }: Props) => {
  const throttledOnChange = useThrottle(onChange, 500);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={clsx(styles.item, styles[variant], {
          [styles.large]: size === 'large',
        })}
        onClick={() => throttledOnChange(-1)}
      >
        {withConditionCase(arrows)({
          single: <AngleLeft />,
          double: <img src={getStaticImageSrc(double_arrow_left)} alt="arrow" width={18} height={18} />,
        })}
      </div>
      <div
        className={clsx(styles.item, styles[variant], {
          [styles.large]: size === 'large',
        })}
        onClick={() => throttledOnChange(1)}
      >
        {withConditionCase(arrows)({
          single: <AngleRight />,
          double: (
            <img
              src={getStaticImageSrc(double_arrow_left)}
              alt="arrow"
              width={18}
              height={18}
              style={{ transform: 'rotate(180deg)' }}
            />
          ),
        })}
      </div>
    </div>
  );
};
