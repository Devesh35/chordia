'use client';

import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import clsx from 'clsx';
import { Document } from '../Document';
import type { FormDocumentSection as FDS } from '@li/types/design';
import { withCondition } from '@li/design/enhancers';

export const FormDocumentSection = ({
  isEdit,
  section,
}: {
  isEdit: boolean;
  section: FDS;
}) => {
  return (
    <section className={formStyles.section}>
      <header className={formStyles['section-header']}>
        {section.title}
        {withCondition(!!section.verification)(
          <div className={formStyles.verification}>
            Subject to verification & confirmation
          </div>,
        )}
      </header>

      <div
        className={clsx(
          formStyles['section-content-wrapper'],
          formStyles['section-content'],
          grid.grid,
        )}
      >
        {section.items.map((item) => (
          <div
            className={clsx(grid[`col-2`], grid['col-t-4'], grid['col-m-6'])}
          >
            <Document {...item} isEdit={isEdit} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const FormDocumentSectionList = ({
  isEdit,
  sections,
}: {
  isEdit: boolean;
  sections: FDS[];
}) =>
  sections.map((section) => (
    <FormDocumentSection key={section.id} isEdit={isEdit} section={section} />
  ));
