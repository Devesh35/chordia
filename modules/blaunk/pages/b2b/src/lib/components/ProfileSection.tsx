import clsx from 'clsx';
import { ProfileSection as PSType } from '../profile.config';
import { grid } from '@li/config/design';
import styles from './profile.module.css';
import { ProfileItem } from './ProfileItem';

export const ProfileSection = ({
  label,
  items,
  isEdit,
}: PSType & { isEdit: boolean }) => (
  <section className={styles.section}>
    <header className={styles['section-header']}>{label}</header>
    <div className={clsx(styles['section-content'], grid.grid)}>
      {items.map((item) => (
        <ProfileItem key={item.label} isEdit={isEdit} {...item} />
      ))}
    </div>
  </section>
);
