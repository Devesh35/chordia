'use client';

import { useEffect } from 'react';
import { FormGroupBase, FormSectionGroup } from '@li/types/design';
import { FormFormSectionList } from './FormFormSection';
import { FormDocumentSectionList } from './FormDocumentSection';
import { FormConfigProvider, useFormConfig } from './FormConfigProvider';
import { FormFormSectionSelect } from './FormFormSectionSelect';

type FormSectionProps<
  T extends FormGroupBase,
  K extends keyof T & string = keyof T & string,
> = {
  selected: K;
  hasBG?: boolean;
  isEdit?: boolean;
  section: FormSectionGroup<T>;
};

export const FormSection = <
  T extends FormGroupBase,
  K extends keyof T & string = keyof T & string,
>(
  props: FormSectionProps<T, K>,
) => {
  return (
    <FormConfigProvider
      defaultValue={{ hasBG: props.hasBG, isEdit: props.isEdit }}
    >
      <FormSectionBase {...props} />
    </FormConfigProvider>
  );
};

export const FormSectionBase = <
  T extends FormGroupBase,
  K extends keyof T & string = keyof T & string,
>({
  selected,
  section,
  isEdit,
  hasBG,
}: FormSectionProps<T, K>) => {
  const { setHasBG, setIsEdit } = useFormConfig();

  useEffect(() => {
    if (typeof hasBG !== 'undefined') setHasBG(hasBG);
    if (typeof isEdit !== 'undefined') setIsEdit(isEdit);
  }, [hasBG, isEdit, setHasBG, setIsEdit]);

  if (!section) return null;
  const sectionItem = section[selected];

  return (
    <>
      {'form' in sectionItem && sectionItem.form && (
        <FormFormSectionList sections={sectionItem.form} />
      )}
      {'document' in sectionItem && sectionItem.document && (
        <FormDocumentSectionList sections={sectionItem.document} />
      )}
      {'options' in sectionItem && (
        <FormFormSectionSelect
          title={sectionItem.title}
          options={sectionItem.options}
          section={sectionItem.items}
        />
      )}
    </>
  );
};
