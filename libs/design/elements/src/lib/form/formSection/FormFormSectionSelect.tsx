'use client';

import { useState } from 'react';
import {
  FormGroupBase,
  FormSectionGroup,
  SelectItemElement,
} from '@li/types/design';
import formStyles from './form.module.css';
import { Select } from '../Select';
import { FormSectionHeader } from './FormSectionHeader';
import { FormSection } from './FormSection';

export const FormFormSectionSelect = <T extends FormGroupBase>({
  title,
  section,
  options,
}: {
  title: string;
  section: FormSectionGroup<T>;
  options: SelectItemElement[];
}) => {
  const [selected, setSelected] = useState<
    SelectItemElement<keyof T & string> | undefined
  >(options[0]);

  const sectionItem = selected ? section[selected.id] : undefined;
  console.log('selected', selected);

  return (
    <>
      <FormSectionHeader
        title={title}
        className={formStyles['form-group-select-header']}
      />
      <Select
        options={options}
        onChange={setSelected}
        defaultItem={selected}
        className={formStyles['form-group-select']}
      />
      {selected && sectionItem && (
        <FormSection selected={selected.id} section={section} />
      )}
    </>
  );
};
