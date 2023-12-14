import { sbs } from '@li/config/design';
import clsx from 'clsx';
import styles from './scrollableSnap.module.css';
import { ReactChildren } from '@li/types/shared';

type ScrollableSnapProps = {
  className?: string;
} & ReactChildren;

export const ScrollableSnap = ({
  children,
  className,
}: ScrollableSnapProps) => {
  return (
    <div className={clsx(styles.wrapper, sbs.none, className)}>{children}</div>
  );
};
