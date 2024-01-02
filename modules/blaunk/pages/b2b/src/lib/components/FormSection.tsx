import clsx from 'clsx';
import type { FormSection as FSection } from '../formTypes';
import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import { FormItem } from './FormItem';

export const FormSection = ({
  label,
  items,
  isEdit = false,
}: FSection & { isEdit?: boolean }) => (
  <section className={formStyles.section}>
    <header className={formStyles['section-header']}>{label}</header>
    <div className={clsx(formStyles['section-content'], grid.grid)}>
      {items.map((item) => (
        <FormItem key={item.label} isEdit={isEdit} {...item} />
      ))}
    </div>
  </section>
);
