import { sbs } from '@li/config/design';
import clsx from 'clsx';
import React from 'react';
import styles from './scrollableSnap.module.css';

type ScrollableSnapProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollableSnap = ({
  children,
  className,
}: ScrollableSnapProps) => {
  return (
    <div className={clsx(styles.wrapper, sbs.none, className)}>
      {children}
    </div>
  );
};
