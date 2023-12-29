import { grid } from '@li/config/design';
import styles from './profile.module.css';
import clsx from 'clsx';
import { ProfileDocument } from './ProfileDocument';
import { profileDocument, profileDocuments } from '../profile.config';

export const ProfileDocumentSection = ({ isEdit }: { isEdit: boolean }) => {
  return (
    <section className={styles.section}>
      <header className={styles['section-header']}>
        Documents
        <div className={styles.verification}>
          Subject to verification & confirmation from admin
        </div>
      </header>

      <div className={clsx(styles['section-content'], grid.grid)}>
        {profileDocument.map((id) => (
          <div className={grid['col-2']}>
            <ProfileDocument {...profileDocuments[id]} isEdit={isEdit} />
          </div>
        ))}
      </div>
    </section>
  );
};
