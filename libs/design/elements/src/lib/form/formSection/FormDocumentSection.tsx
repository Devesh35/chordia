import { grid } from '@li/config/design';
import styles from './form.module.css';
import clsx from 'clsx';
import { FormDocumentItem } from './FormDocument';
import type { FormDocumentSection as FDS } from '@li/types/design';

export const FormDocumentSection = ({
  isEdit,
  section,
}: {
  isEdit: boolean;
  section: FDS;
}) => {
  return (
    <section className={styles.section}>
      <header className={styles['section-header']}>
        {section.label}
        <div className={styles.verification}>
          Subject to verification & confirmation from admin
        </div>
      </header>

      <div className={clsx(styles['section-content'], grid.grid)}>
        {section.items.map((item) => (
          <div className={grid['col-2']}>
            <FormDocumentItem {...item} isEdit={isEdit} />
          </div>
        ))}
      </div>
    </section>
  );
};
