'use client';

import { useState } from 'react';
import {
  FormGroupBase,
  FormSectionGroup,
  SelectItemElement,
} from '@li/types/design';
import { FormFormSectionList } from './FormFormSection';
import { FormDocumentSectionList } from './FormDocumentSection';
import { Labeled } from '../../decorators';
import formStyles from './form.module.css';
import { Select } from '../Select';

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
      <Labeled label={title} className={formStyles['form-group-select']}>
        <Select
          options={options}
          onChange={setSelected}
          defaultItem={selected}
        />
      </Labeled>
      {selected && sectionItem && 'form' in sectionItem && (
        <FormSection isEdit={isEdit} selected={selected.id} section={section} />
      )}
    </>
  );
};
