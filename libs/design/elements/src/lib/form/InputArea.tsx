'use client';

import { sbs } from '@li/config/design';
import clsx from 'clsx';
import { useCallback, useRef } from 'react';
import formStyles from './form.module.css';
import styles from './input.module.css';

type InputVariant = 'error' | 'success' | 'warning' | 'default';

export type InputAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    prefix?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    variant?: InputVariant;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    disableWrapperFocus?: boolean;
    height?: number;
  };

export const InputArea = ({
  prefix,
  isDisabled = false,
  isReadOnly = false,
  variant = 'default',
  iconLeft,
  iconRight,
  disableWrapperFocus = false,
  height,
  ...props
}: InputAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const focusInput = useCallback(() => {
    if (disableWrapperFocus) return;
    inputRef.current?.focus();
  }, [disableWrapperFocus]);

  return (
    <div
      className={clsx(
        formStyles['item-wrapper'],
        styles.wrapper,
        styles.area,
        styles[variant],
        {
          [styles.disabled]: isDisabled,
          [styles.readonly]: isReadOnly,
        },
        props.className,
      )}
      style={{ resize: 'none', minHeight: height || '128px' }}
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
      <textarea
        {...props}
        prefix={prefix}
        readOnly={isReadOnly}
        disabled={isDisabled}
        ref={inputRef}
        className={clsx(styles.input, sbs.dark)}
        style={{ resize: 'none', minHeight: height || '120px' }}
      />
      {iconRight ? (
        <span
          className={clsx(styles.icon, styles['icon-right'], {
            [styles['icon-disabled']]: isDisabled || isReadOnly,
          })}
        >
          {iconRight}
        </span>
      ) : null}{' '}
    </div>
  );
};
