'use client';

import { useMedia } from '@li/design/hooks';
import { ReactChildren } from '@li/types/shared';
import { randomImageUrl } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './auth-layout.module.css';

export const AuthLayout = ({ children }: ReactChildren) => {
  const isMobile = useMedia();

  return (
    <div className={styles.wrapper}>
      {!isMobile && <Image src={randomImageUrl(600, 800)} width={800} height={600} alt="login" />}
      {children}
    </div>
  );
};
