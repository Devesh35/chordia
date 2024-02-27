import { ClassName, ReactChildren } from '@li/types/shared';
import NextLink from 'next/link';
import styles from './link.module.css';
import clsx from 'clsx';

type Props = React.ComponentProps<typeof NextLink> &
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
