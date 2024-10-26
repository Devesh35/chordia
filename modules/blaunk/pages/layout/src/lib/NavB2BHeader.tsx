'use client';

import { Select } from '@li/design/elements';
import { NavB2BMenuItems } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';
import styles from './navHeader.module.css';

export const NavB2BHeader = () => {
  const router = useRouter();
  return (
    <Select
      maxHeight
      Header="B2B"
      className={styles.welcome}
      options={NavB2BMenuItems}
      defaultItem={NavB2BMenuItems[0]}
      onChange={(item) => item?.path && router.push(item.path)}
    />
  );
};
