import React from 'react';
import styles from './labeled.module.css';

type Props = {
  label: string;
  children: React.ReactNode;
};

export const Labeled = ({ label, children }: Props) => (
  <div>
    <div className={styles.label}>{label}</div>
    {children}
  </div>
);
