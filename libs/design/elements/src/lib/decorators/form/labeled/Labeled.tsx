import clsx from 'clsx';
import styles from './labeled.module.css';
import { ClassName, ReactChildren } from '@li/types/shared';

type Props = {
  label: string;
  inline?: true;
} & ReactChildren &
  Partial<ClassName>;

export const Labeled = ({ label, children, inline, className }: Props) => (
  <div className={clsx({ [styles.inline]: inline }, className)}>
    <label className={styles.label}>{label}</label>
    {children}
  </div>
);
