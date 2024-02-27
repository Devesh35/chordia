'use client';

import React from 'react';
import styles from './checkbox.module.css';
import { ClassName } from '@li/types/shared';
import clsx from 'clsx';

type CheckboxProps = {
  label: string;
  readonly?: boolean;
  onChange?: (checked: boolean) => void;
} & Partial<ClassName>;

export const Checkbox = ({
  label,
  onChange,
  className,
  readonly,
}: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.checked);

  return (
    <label className={clsx(styles.label, className)}>
      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.input}
        disabled={readonly}
      />
      {label}
    </label>
  );
};
