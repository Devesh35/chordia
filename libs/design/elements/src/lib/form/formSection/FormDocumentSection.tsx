'use client';

import { grid } from '@li/config/design';
import formStyles from './form.module.css';
import clsx from 'clsx';
import { FormDocument } from './FormDocument';
import type { FormDocumentSection as FDS } from '@li/types/design';
import { withCondition } from '@li/design/enhancers';
import { FormSectionHeader } from './FormSectionHeader';

export const FormDocumentSection = ({ section }: { section: FDS }) => {
  return (
    <section className={formStyles.section}>
      <FormSectionHeader
        title={section.title}
        sub={withCondition(!!section.verification)(
          <div className={formStyles.verification}>
            Subject to verification & confirmation
          </div>,
        )}
      />

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
            <FormDocument {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const FormDocumentSectionList = ({ sections }: { sections: FDS[] }) =>
  sections.map((section) => (
    <FormDocumentSection key={section.id} section={section} />
  ));
