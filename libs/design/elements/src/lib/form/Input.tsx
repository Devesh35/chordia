'use client';

import { useCallback, useRef } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

type InputVariant = 'error' | 'success' | 'warning' | 'primary';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  prefix?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  variant?: InputVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disableWrapperFocus?: boolean;
};

export const Input = ({
  prefix,
  isDisabled = false,
  isReadOnly = false,
  variant = 'primary',
  iconLeft,
  iconRight,
  disableWrapperFocus = false,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = useCallback(() => {
    if (disableWrapperFocus) return;
    inputRef.current?.focus();
  }, [disableWrapperFocus]);

  return (
    <div
      className={clsx(props.className, styles.wrapper, styles[variant], {
        [styles.disabled]: isDisabled,
        [styles.readonly]: isReadOnly,
      })}
      onClick={focusInput}
    >
      {iconLeft ? (
        <span
          className={clsx(styles.icon, {
            [styles['icon-disabled']]: isDisabled || isReadOnly,
          })}
        >
          {iconLeft}
        </span>
      ) : null}
      {prefix ? <div className={styles.prefix}>{prefix}</div> : null}
      <input
        {...props}
        prefix={prefix}
        readOnly={isReadOnly}
        disabled={isDisabled}
        ref={inputRef}
        className={styles.input}
      />
      {iconRight ? (
        <span
          className={clsx(styles.icon, styles['icon-right'], {
            [styles['icon-disabled']]: isDisabled || isReadOnly,
          })}
        >
          {iconRight}
        </span>
      ) : null}
    </div>
  );
};
