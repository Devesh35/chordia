import { toLowerCase } from '@li/config/utils';
import { FormSection, TabNav } from '@li/design/elements';
import { profileSections } from '@md/blaunk/config';
import styles from './profile.module.css';

const tabItems = ['Personal', 'General', 'Bank', 'Vendor'] as const;

const tabs = tabItems.map((item) => ({
  id: toLowerCase(item),
  label: item,
  content: (
    <FormSection section={profileSections} selected={toLowerCase(item)} />
  ),
}));

export const ProfileContent = () => (
  <TabNav tabs={tabs} className={styles.content} />
);
