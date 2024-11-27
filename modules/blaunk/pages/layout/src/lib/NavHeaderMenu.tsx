'use client';

import { Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { NavMenuItems } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './navHeader.module.css';

export const NavHeaderMenu = () => {
  const router = useRouter();
  const { isMobile } = useMedia();

  useEffect(() => {
    // prefetch
    NavMenuItems.forEach((item) => {
      if (item.path) {
        router.prefetch(item.path);
      }
    });
  });

  return (
    <Select
      maxHeight
      Header={isMobile ? 'Chordia' : 'Welcome, Chordia'}
      className={styles.welcome}
      options={NavMenuItems}
      defaultItem={NavMenuItems[0]}
      onChange={(item) => item?.path && router.push(item.path)}
    />
  );
};
