import { SelectItem } from '@li/types/design';
import { Input, InputProps } from './Input';
import { Select, SelectProps } from './Select';
import styles from './input-select.module.css';

export type InputAndSelectProps<K extends string, S extends SelectItem<K>> = {
  input: InputProps;
  select: SelectProps<K, S>;
  inputFlex?: number;
};

export const InputAndSelect = <K extends string, S extends SelectItem<K>>({
  input,
  select,
  inputFlex = 1,
}: InputAndSelectProps<K, S>) => {
  return (
    <div className={styles.wrapper}>
      <Input className={styles.input} style={{ flex: inputFlex }} {...input} />
      <Select className={styles.select} {...select} />
    </div>
  );
};
