import type { FormSection as FS } from '@li/types/design';
import { ClassName } from '@li/types/shared';
import clsx from 'clsx';
import formStyles from './form.module.css';

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
