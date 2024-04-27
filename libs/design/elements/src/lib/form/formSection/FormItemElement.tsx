import { FormSectionItem } from '@li/types/design';
import { Input } from '../Input';
import { InputArea } from '../InputArea';
import { PhoneInput } from '../PhoneInput';
import { Select } from '../Select';
import styles from './form.module.css';

const defaultOnChange = (v: unknown) => {};

export const FormItemElement = <D,>(item: FormSectionItem<D>) => {
  if (item.type === 'select') {
    return (
      <Select
        placeholder={item.placeholder}
        options={item.options}
        onChange={item.onChange}
        defaultItem={item.value}
      />
    );
  }

  if (item.type === 'phone') {
    return (
      <PhoneInput
        placeholder={item.placeholder}
        countryCodes={item.countryCodes}
        value={
          item.value || {
            country: item.countryCodes[0],
            number: '',
          }
        }
        onChange={item.onChange || defaultOnChange}
      />
    );
  }

  if (item.type === 'number') {
    return (
      <Input
        placeholder={item.placeholder}
        value={item.value}
        type={item.type}
        maxLen={item.maxLen}
        onChange={(v) => item.onChange?.(v.target.valueAsNumber)}
      />
    );
  }

  if (item.type === 'email')
    return (
      <Input
        placeholder={item.placeholder}
        maxLen={item.maxLen}
        type={item.type}
        value={item.value}
        onChange={(e) => item.onChange?.(e.target.value)}
      />
    );

  if (item.type === 'area') {
    return (
      <InputArea
        placeholder={item.placeholder}
        className={styles.area}
        value={item.value}
        onChange={(e) => item.onChange?.(e.target.value)}
      />
    );
  }

  return (
    <Input
      placeholder={item.placeholder}
      value={item.value as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange={(e) => item.onChange?.(e.target.value)}
    />
  );
};
