import { ClassName, ReactChildren } from '@li/types/shared';
import NextLink, { LinkProps } from 'next/link';
import styles from './link.module.css';
import clsx from 'clsx';

export const Link = ({
  children,
  className,
  ...props
}: LinkProps & ReactChildren & Partial<ClassName>) => {
  return (
    <NextLink {...props} className={clsx(styles.link, className)}>
      {children}
    </NextLink>
  );
};
