'use client';

import { useState } from 'react';
import {
  FormGroupBase,
  FormSectionGroup,
  SelectItemElement,
} from '@li/types/design';
import { FormFormSectionList } from './FormFormSection';
import { FormDocumentSectionList } from './FormDocumentSection';
import formStyles from './form.module.css';
import { Select } from '../Select';
import clsx from 'clsx';

export const FormSection = <
  T extends FormGroupBase,
  K extends keyof T & string = keyof T & string,
>({
  selected,
  section,
  isEdit,
}: {
  isEdit: boolean;
  selected: K;
  section: FormSectionGroup<T>;
}) => {
  if (!section) return null;
  const sectionItem = section[selected];

  return (
    <>
      {'form' in sectionItem && sectionItem.form && (
        <FormFormSectionList isEdit={isEdit} sections={sectionItem.form} />
      )}
      {'document' in sectionItem && sectionItem.document && (
        <FormDocumentSectionList
          isEdit={isEdit}
          sections={sectionItem.document}
        />
      )}
      {'options' in sectionItem && (
        <FormFormSectionSelect
          isEdit={isEdit}
          title={sectionItem.title}
          options={sectionItem.options}
          section={sectionItem.items}
        />
      )}
    </>
  );
};

const FormFormSectionSelect = <T extends FormGroupBase>({
  title,
  isEdit,
  section,
  options,
}: {
  isEdit: boolean;
  title: string;
  section: FormSectionGroup<T>;
  options: SelectItemElement[];
}) => {
  const [selected, setSelected] = useState<
    SelectItemElement<keyof T & string> | undefined
  >(options[0]);

  const sectionItem = selected ? section[selected.id] : undefined;

  return (
    <>
      <header className={clsx(formStyles['section-header'],formStyles['form-group-select-header'])}>{title}</header>
      <Select
        options={options}
        onChange={setSelected}
        defaultItem={selected}
        className={formStyles['form-group-select']}
      />
      {selected && sectionItem && 'form' in sectionItem && (
        <FormSection isEdit={isEdit} selected={selected.id} section={section} />
      )}
    </>
  );
};
