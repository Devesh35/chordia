'use client';

import {
  Button,
  FormDocumentSection,
  FormSection,
  PageHeader,
  TabNav,
} from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { profileSections, profileDocumentSection } from '@md/blaunk/config';
import styles from './profile.module.css';
import { useMemo, useState } from 'react';
import { toLowerCase } from '@li/config/utils';

const tabItems = ['Personal', 'General', 'Bank', 'Vendor'] as const;

const tabs = (isEdit: boolean) =>
  tabItems
    .map((item) => ({
      id: toLowerCase(item),
      label: item,
    }))
    .map((tab) => ({
      ...tab,
      content: (
        <>
          {profileSections[tab.id].map((section) => (
            <FormSection key={section.id} isEdit={isEdit} {...section} />
          ))}
          {tab.id !== 'general' ? (
            <FormDocumentSection
              isEdit={isEdit}
              section={profileDocumentSection[tab.id]}
            />
          ) : null}
        </>
      ),
    }));

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const displayTabs = useMemo(() => tabs(isEdit), [isEdit]);

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
      <TabNav tabs={displayTabs} className={styles.content} />

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
