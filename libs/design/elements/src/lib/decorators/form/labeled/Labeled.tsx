import { ClassName, ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import styles from './labeled.module.css';

type Props = {
  label: string;
  inline?: boolean;
  labelWidth?: number;
} & ReactChildren &
  Partial<ClassName>;

export const Labeled = ({ label, children, inline, className, labelWidth }: Props) => (
  <div className={clsx({ [styles.inline]: inline }, className)}>
    <label className={styles.label} style={{ minWidth: labelWidth }}>
      {label}
    </label>
    {children}
  </div>
);
