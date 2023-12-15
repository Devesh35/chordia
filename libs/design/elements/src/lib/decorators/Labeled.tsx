import styles from './labeled.module.css';
import { ReactChildren } from '@li/types/shared';

type Props = {
  label: string;
} & ReactChildren;

export const Labeled = ({ label, children }: Props) => (
  <div>
    <div className={styles.label}>{label}</div>
    {children}
  </div>
);
