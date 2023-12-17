import { AvailableCountries } from '@md/blaunk/config';
import { Input, InputProps } from './Input';
import { Select } from './Select';
import styles from './input-select.module.css';
import clsx from 'clsx';

const countryCodes = AvailableCountries.map((c) => ({
  id: c.id,
  item: c.code,
}));

export const PhoneInput = (props: InputProps) => {
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
