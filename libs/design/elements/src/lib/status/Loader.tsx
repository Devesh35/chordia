import clsx from 'clsx';
import styles from './loader.module.css';

type Props = {
  size?: string;
  variant?: 'primary' | 'secondary';
};

export const Loader = ({ size, variant = 'primary' }: Props) => {
  return (
    <span
      className={clsx(styles.loader, styles[`loader-${variant}`])}
      style={{ width: size, height: size }}
    />
  );
};
