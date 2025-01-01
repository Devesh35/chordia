'use client';

import { grid } from '@li/config/design';
import { withCondition } from '@li/design/enhancers';
import type { FormDocumentSection as FDS } from '@li/types/design';
import clsx from 'clsx';
import { FormDocument } from './FormDocument';
import { FormSectionHeader } from './FormSectionHeader';
import formStyles from './form.module.css';

export const FormDocumentSection = <T, D>({ section }: { section: FDS<T, D> }) => {
  return (
    <section className={formStyles.section}>
      {withCondition(!section.noHeader)(
        <FormSectionHeader
          title={section.title}
          sub={withCondition(!!section.verification)(
            <div className={formStyles.verification}>
              <div>Subject to verification & confirmation</div>
              <ul className={formStyles.ul}>
                <li>Document should be clear and visible</li>
                <li>Size less than 150kb</li>
              </ul>
            </div>,
          )}
        />,
      )}

      <div className={clsx(formStyles['section-content-wrapper'], formStyles['section-content'], grid.grid)}>
        {section.items.map((item) => (
          <div key={`${item.id}`} className={clsx(grid[`col-2`], grid['col-t-3'], grid['col-m-3'])}>
            <FormDocument {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const FormDocumentSectionList = <T, D>({ sections }: { sections: FDS<T, D>[] }) =>
  sections.map((section) =>
    withCondition(!!section.items.length)(<FormDocumentSection key={`${section.id}`} section={section} />),
  );
