import { ClassName, ReactChildren } from '@li/types/shared';
import NextLink, { LinkProps } from 'next/link';
import styles from './link.module.css';
import clsx from 'clsx';

type Props = LinkProps &
  ReactChildren &
  Partial<ClassName> & {
    variant?: 'primary' | 'secondary' | 'button-primary' | 'button-secondary';
  };

export const Link = ({
  variant = 'primary',
  children,
  className,
  ...props
}: Props) => {
  return (
    <NextLink
      {...props}
      className={clsx(styles.link, styles[variant], className)}
    >
      {children}
    </NextLink>
  );
};
