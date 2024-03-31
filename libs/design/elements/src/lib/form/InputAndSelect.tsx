import { SelectItem } from '@li/types/design';
import { ClassName } from '@li/types/shared';
import clsx from 'clsx';
import { Input, InputProps } from './Input';
import { Select, SelectProps } from './Select';
import styles from './input-select.module.css';

export type InputAndSelectProps<K extends string, S extends SelectItem<K>> = {
  input: InputProps;
  select: SelectProps<K, S>;
  inputFlex?: number;
} & Partial<ClassName>;

export const InputAndSelect = <K extends string, S extends SelectItem<K>>({
  input,
  select,
  inputFlex = 1,
  className,
}: InputAndSelectProps<K, S>) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Input className={styles.input} style={{ flex: inputFlex }} {...input} />
      <Select className={styles.select} {...select} />
    </div>
  );
};
