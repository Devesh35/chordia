import { withConditionCase } from '@li/design/enhancers';
import { FormSectionItem } from '@li/types/design';
import { Input } from '../Input';
import { InputArea } from '../InputArea';
import { PhoneInput } from '../PhoneInput';
import { Select } from '../Select';
import styles from './form.module.css';

export const FormItemElement = <D,>(item: FormSectionItem<D>) => {
  if (item.type === 'select') {
    return <Select placeholder={item.placeholder} options={item.options} />;
  }

  if (item.type === 'phone') {
    return (
      <PhoneInput
        placeholder={item.placeholder}
        countryCodes={item.countryCodes}
      />
    );
  }

  return withConditionCase(item.type || 'text')({
    area: <InputArea placeholder={item.placeholder} className={styles.area} />,
    default: (
      <Input
        placeholder={item.placeholder}
        type={item.type}
        maxLen={item.maxLen}
      />
    ),
  });
};
