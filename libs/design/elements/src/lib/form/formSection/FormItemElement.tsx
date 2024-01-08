import { withConditionCase } from '@li/design/enhancers';
import styles from './form.module.css';
import { FormSectionItem } from '@li/types/design';
import { Select } from '../Select';
import { PhoneInput } from '../PhoneInput';
import { InputArea } from '../InputArea';
import { Input } from '../Input';

export const FormItemElement = (item: FormSectionItem) => {
  // if (item.type === 'select-submenu') {
  //   return <Select placeholder={item.placeholder} options={item.options['']} />;
  // }

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
    default: <Input placeholder={item.placeholder} type={item.type} />,
  });
};
