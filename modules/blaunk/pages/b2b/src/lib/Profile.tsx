'use client';

import { Button } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import styles from './profile.module.css';
import { profileSections, profileSection } from './profile.config';
import { useState } from 'react';
import { ProfileSection } from './components/ProfileSection';
import { ProfileDocumentSection } from './components/ProfileDocumentSection';

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        Profile
        {withCondition(!isEdit)(
          <Button variant="secondary" onClick={() => setIsEdit(true)}>
            Edit
          </Button>,
        )}
      </header>
      {profileSection.map((sectionId) => {
        const section = profileSections[sectionId];
        return <ProfileSection key={sectionId} isEdit={isEdit} {...section} />;
      })}
      <ProfileDocumentSection isEdit={isEdit} />
      {withCondition(isEdit)(
        <div className={styles.actions}>
          <Button variant="text" onClick={() => setIsEdit(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={() => setIsEdit(false)}>
            Save
          </Button>
        </div>,
      )}
    </div>
  );
};
