import { Input, PhoneInput, Select } from '@li/design/elements';
import { ProfileSectionItem } from '../profile.config';
import { CountryCodeOptions } from '@md/blaunk/config';

export const ProfileItemElement = (item: ProfileSectionItem) => {
  if (item.type === 'phone') {
    return (
      <PhoneInput
        placeholder={item.placeholder}
        countryCodes={CountryCodeOptions}
      />
    );
  }
  if (item.type === 'select') {
    return <Select placeholder={item.placeholder} options={item.options} />;
  }

  return <Input placeholder={item.placeholder} type={item.type} />;
};
