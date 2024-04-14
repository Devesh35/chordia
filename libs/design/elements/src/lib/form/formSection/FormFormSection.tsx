'use client';

import { grid } from '@li/config/design';
import { withCondition } from '@li/design/enhancers';
import type { FormSection as FS } from '@li/types/design';
import clsx from 'clsx';
import { FormItem } from './FormItem';
import { FormSectionHeader } from './FormSectionHeader';
import formStyles from './form.module.css';

const FormFormSection = <T, D>({ section }: { section: FS<T, D> }) => (
  <section className={clsx(formStyles.section)}>
    <FormSectionHeader title={section.title} />
    <div className={clsx(formStyles['section-content-wrapper'])}>
      <div
        className={clsx(
          formStyles['section-content'],
          grid.grid,
          grid['grid-t-8'],
        )}
      >
        {section.items.map((item) => (
          <FormItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export const FormFormSectionList = <T, D>({
  sections,
}: {
  sections: FS<T, D>[];
}) =>
  sections.map((section) =>
    withCondition(!!section.items.length)(
      <FormFormSection key={`${section.id}`} section={section} />,
    ),
  );
