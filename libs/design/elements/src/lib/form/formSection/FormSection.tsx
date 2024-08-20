'use client';

import { FormGroupBase, FormSectionGroup } from '@li/types/design';
import { FormDocumentSectionList } from './FormDocumentSection';
import { FormFormSectionList } from './FormFormSection';
import { FormFormSectionSelect } from './FormFormSectionSelect';

type FormSectionProps<T extends FormGroupBase, K extends keyof T & string = keyof T & string> = {
  selected: K;
  section: FormSectionGroup<T>;
};

export const FormSection = <T extends FormGroupBase, K extends keyof T & string = keyof T & string>({
  selected,
  section,
}: FormSectionProps<T, K>) => {
  if (!section) return null;
  const sectionItem = section[selected];

  return (
    <>
      {'form' in sectionItem && sectionItem.form && <FormFormSectionList sections={sectionItem.form} />}
      {'document' in sectionItem && sectionItem.document && <FormDocumentSectionList sections={sectionItem.document} />}
      {'options' in sectionItem && (
        <FormFormSectionSelect title={sectionItem.title} options={sectionItem.options} section={sectionItem.items} />
      )}
    </>
  );
};
