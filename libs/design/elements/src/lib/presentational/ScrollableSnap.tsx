'use client';

import { sbs } from '@li/config/design';
import clsx from 'clsx';
import styles from './scrollableSnap.module.css';
import { ClassName, ReactChildren } from '@li/types/shared';
import { useRef } from 'react';
import { MoveControl } from '../decorators/MoveControl';

type ScrollableSnapProps = {
  controls?: true;
  direction?: 'x' | 'y';
  delta?: number;
} & ReactChildren &
  Partial<ClassName>;

export const ScrollableSnap = ({
  children,
  className,
  controls,
  direction = 'x',
  delta = 10
}: ScrollableSnapProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClick = (dx: number) => {
    if (ref.current)
      // dx has values of 1, -1
      // moving 10 px will scroll to next component due to scroll-snap-type
      ref.current.scrollBy(
        direction === 'x' ? dx * delta : 0,
        direction === 'y' ? dx * delta : 0,
      );
  };

  return (
    <>
      {controls ? (
        <MoveControl onChange={onClick} className={styles.control} />
      ) : null}
      <div
        className={clsx(
          styles.wrapper,
          styles[`scroll-${direction}`],
          sbs.none,
          className,
        )}
        ref={ref}
      >
        {children}
      </div>
    </>
  );
};
