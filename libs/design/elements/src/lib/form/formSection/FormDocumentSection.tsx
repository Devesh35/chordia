import { grid } from '@li/config/design';
import styles from './form.module.css';
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
    <section className={styles.section}>
      <header className={styles['section-header']}>
        {section.title}
        {withCondition(!!section.verification)(
          <div className={styles.verification}>
            Subject to verification & confirmation
          </div>,
        )}
      </header>

      <div className={clsx(styles['section-content'], grid.grid)}>
        {section.items.map((item) => (
          <div className={grid['col-2']}>
            <Document {...item} isEdit={isEdit} />
          </div>
        ))}
      </div>
    </section>
  );
};
