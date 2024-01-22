import type { FormSection as FS } from '@li/types/design';
import formStyles from './form.module.css';
import { ClassName } from '@li/types/shared';
import clsx from 'clsx';

export type FormSectionTitle = { title: FS['title'] };

export const FormSectionHeader = ({
  title,
  sub,
  className,
}: FormSectionTitle & { sub?: React.ReactNode } & Partial<ClassName>) => (
  <header className={clsx(formStyles['section-header'], className)}>
    {title}
    {sub}
  </header>
);
