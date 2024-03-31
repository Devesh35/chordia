'use client';

import { Button, FormConfigProvider, PageHeader } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { useState } from 'react';
import { ProfileContent } from './ProfileContent';
import styles from './profile.module.css';

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
      <FormConfigProvider isEdit={isEdit} hasBG>
        <ProfileContent />
      </FormConfigProvider>

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
