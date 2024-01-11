import clsx from 'clsx';
import { Input, InputProps } from './Input';
import styles from './input-select.module.css';

export const EmailInput = ({ ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Enter your email"
        type="email"
        className={clsx(styles.input)}
        {...props}
      />
    </div>
  );
};
