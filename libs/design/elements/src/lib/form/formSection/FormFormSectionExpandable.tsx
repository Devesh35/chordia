'use client';

import clsx from 'clsx';
import type { FormSection as FS } from '@li/types/design';
import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import { FormItem } from './FormItem';
import { Accordion } from '../../lists';
import { withCondition } from '@li/design/enhancers';

export const FormFormSectionExpandable = <T, D>({
  section,
}: {
  section: FS<T, D>;
}) => (
  <section className={clsx(formStyles.section)}>
    <Accordion title={section.title} className={formStyles.accordion}>
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
    </Accordion>
  </section>
);

export const FormFormSectionExpandableList = <T, D>({
  sections,
}: {
  sections: FS<T, D>[];
}) => (
  <>
    {sections.map((section) =>
      withCondition(!!section.items.length)(
        <FormFormSectionExpandable key={`${section.id}`} section={section} />,
      ),
    )}
  </>
);
