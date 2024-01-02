import { Input, InputArea, PhoneInput, Select } from '@li/design/elements';
import type { FormSectionItem } from '../formTypes';
import { CountryCodeOptions } from '@md/blaunk/config';
import { withConditionCase } from '@li/design/enhancers';
import styles from './form.module.css';


export const FormItemElement = (item: FormSectionItem) => {
  if (item.type === 'select') {
    return <Select placeholder={item.placeholder} options={item.options} />;
  }

  return withConditionCase(item.type || 'text')({
    phone: (
      <PhoneInput
        placeholder={item.placeholder}
        countryCodes={CountryCodeOptions}
      />
    ),
    area: <InputArea placeholder={item.placeholder}  className={styles.area}/>,
    default: <Input placeholder={item.placeholder} type={item.type} />,
  });
};
