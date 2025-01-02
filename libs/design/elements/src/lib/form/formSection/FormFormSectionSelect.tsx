'use client';

import { grid } from '@li/config/design';
import { FormGroupBase, FormSectionGroup, SelectItemElement } from '@li/types/design';
import clsx from 'clsx';
import { useState } from 'react';
import { Select } from '../Select';
import { FormSection } from './FormSection';
import { FormSectionHeader } from './FormSectionHeader';
import formStyles from './form.module.css';

export const FormFormSectionSelect = <T extends FormGroupBase>({
  title,
  section,
  options,
}: {
  title: string;
  section: FormSectionGroup<T>;
  options: SelectItemElement[];
}) => {
  const [selected, setSelected] = useState<SelectItemElement<keyof T & string> | undefined>(options[0]);

  const sectionItem = selected ? section[selected.id] : undefined;

  return (
    <section className={formStyles.section}>
      <FormSectionHeader title={title} className={formStyles['form-group-select-header']} />
      <div className={clsx(formStyles['section-content'], grid.grid)}>
        <Select
          options={options}
          onChange={setSelected}
          defaultItem={selected}
          className={clsx(formStyles['form-group-select'], grid[`col-3`], grid['col-t-3'], grid['col-m-6'])}
        />{' '}
      </div>

      {selected && sectionItem && <FormSection selected={selected.id} section={section} />}
    </section>
  );
};
