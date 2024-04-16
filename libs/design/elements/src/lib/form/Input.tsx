'use client';

import clsx from 'clsx';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import formStyles from './form.module.css';
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
  maxLen?: number;
};

export const Input = ({
  prefix,
  isDisabled = false,
  isReadOnly = false,
  variant = 'primary',
  iconLeft,
  iconRight,
  disableWrapperFocus = false,
  maxLen = Infinity,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = useCallback(() => {
    if (disableWrapperFocus) return;
    inputRef.current?.focus();
  }, [disableWrapperFocus]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, maxLen);
    setValue(value);
    props?.onChange?.(e);
  };

  return (
    <div
      className={clsx(
        formStyles['item-wrapper'],
        props.className,
        styles.wrapper,
        styles[variant],
        {
          [styles.disabled]: isDisabled,
          [styles.readonly]: isReadOnly,
        },
      )}
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
        value={value}
        onChange={onChange}
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
