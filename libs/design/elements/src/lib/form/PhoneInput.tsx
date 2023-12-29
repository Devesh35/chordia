import { Input, InputProps } from './Input';
import { Select } from './Select';
import styles from './input-select.module.css';
import clsx from 'clsx';
import { SelectItem } from './types';

export const PhoneInput = ({
  countryCodes,
  ...props
}: InputProps & { countryCodes: SelectItem[] }) => {
  return (
    <div className={styles.wrapper}>
      <Select
        className={clsx(styles.select, styles['phone-select'])}
        defaultItem={countryCodes[0]}
        options={countryCodes}
      />
      <Input
        className={clsx(styles.input, styles['phone-input'])}
        type="number"
        {...props}
      />
    </div>
  );
};
