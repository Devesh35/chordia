import { SelectItemElement } from '@li/types/design';
import { Input, InputProps } from './Input';
import { Select } from './Select';
import styles from './input-select.module.css';
import clsx from 'clsx';

export const PhoneInput = ({
  countryCodes,
  ...props
}: InputProps & { countryCodes: SelectItemElement[] }) => {
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
