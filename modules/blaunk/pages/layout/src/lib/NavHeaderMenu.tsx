'use client';

import { Select } from '@li/design/elements';
import { NavMenuItems } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';
import styles from './navHeader.module.css';

export const NavHeaderMenu = () => {
  const router = useRouter();
  return (
    <Select
      maxHeight
      Header="Welcome, Chordia"
      className={styles.welcome}
      options={NavMenuItems}
      defaultItem={NavMenuItems[0]}
      onChange={(item) => item?.path && router.push(item.path)}
    />
  );
};
