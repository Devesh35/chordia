'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
import { ReactChildren } from '@li/types/shared';

type Variant = 'primary' | 'secondary' | 'outline' | 'text' | 'error';

export type ButtonProps = {
  variant?: Variant;
  isDisabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ReactChildren;

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(styles.button, styles[variant], rest.className || '')}
      disabled={isDisabled}
    >
      {iconLeft || null}
      {children}
      {iconRight || null}
    </button>
  );
};
