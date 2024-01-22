'use client';

import {
  Button,
  FormConfigProvider,
  FormSection,
  PageHeader,
  TabNav,
} from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { profileSections } from '@md/blaunk/config';
import styles from './profile.module.css';
import { useState } from 'react';
import { toLowerCase } from '@li/config/utils';

const tabItems = ['Personal', 'General', 'Bank', 'Vendor'] as const;

const tabs = tabItems.map((item) => ({
  id: toLowerCase(item),
  label: item,
  content: (
    <FormSection section={profileSections} selected={toLowerCase(item)} />
  ),
}));

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
        <TabNav tabs={tabs} className={styles.content} />
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
