import { Input, InputProps } from './Input';
import { Select, SelectProps } from './Select';
import styles from './input-select.module.css';

export type InputAndSelectProps<K extends string> = {
  input: InputProps;
  select: SelectProps<K>;
  inputFlex?: number;
};

export const InputAndSelect = <K extends string>({
  input,
  select,
  inputFlex = 1,
}: InputAndSelectProps<K>) => {
  return (
    <div className={styles.wrapper}>
      <Input className={styles.input} style={{ flex: inputFlex }} {...input} />
      <Select className={styles.select} {...select} />
    </div>
  );
};
