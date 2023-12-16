import styles from './labeled.module.css';
import { ReactChildren } from '@li/types/shared';

type Props = {
  label: string;
} & ReactChildren;

export const Labeled = ({ label, children }: Props) => (
  <div>
    <label className={styles.label}>{label}</label>
    {children}
  </div>
);
