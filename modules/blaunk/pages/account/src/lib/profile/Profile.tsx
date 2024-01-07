'use client';

import { Button, FormDocumentSection, FormSection } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import {
  profileSection,
  profileSections,
  profileDocumentSection,
} from '@md/blaunk/config';
import styles from './profile.module.css';
import { useState } from 'react';
import { PageHeader } from '@md/blaunk/design';

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.wrapper}>
      <PageHeader
        title={'Profile'}
        aside={
          <Button variant="secondary" onClick={() => setIsEdit(true)}>
            {withCondition(isEdit)('Save', 'Edit')}
          </Button>
        }
      />
      {profileSection.map((sectionId) => {
        const section = profileSections[sectionId];
        return <FormSection key={sectionId} isEdit={isEdit} {...section} />;
      })}
      <FormDocumentSection isEdit={isEdit} section={profileDocumentSection} />
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
