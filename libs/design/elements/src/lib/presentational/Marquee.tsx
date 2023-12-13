'use client';

import clsx from 'clsx';
import React, { ReactNode, useMemo, useState } from 'react';
import styles from './marquee.module.css';

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOhHover?: boolean;
  isInfinite?: boolean;
  itemsGap?: number;
};

export const Marquee = ({
  children,
  className,
  pauseOhHover = false,
  isInfinite = true,
  itemsGap = 0,
}: MarqueeProps) => {
  const childArray = useMemo(() => {
    const c = React.Children.toArray(children) as React.ReactElement[];
    return isInfinite
      ? [...c, ...c.map((o) => ({ ...o, key: `${o.key}_1` }))]
      : c;
  }, [children, isInfinite]);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={clsx(styles.content, {
          [styles.pause]: !isAnimationRunning,
        })}
        onMouseEnter={() => setIsAnimationRunning(!pauseOhHover)}
        onMouseLeave={() => setIsAnimationRunning(true)}
        style={{ gap: `${itemsGap}px`, paddingInline: `${itemsGap / 2}px` }}
      >
        {childArray.map((child) => child)}
      </div>
    </div>
  );
};
