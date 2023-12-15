import { ReactChildren } from '@li/types/shared';
import React from 'react';
import styles from '../base.module.css';
import { AuthLayout } from '@md/blaunk/pages/auth';

const Layout = ({ children }: ReactChildren) => {
  return (
    <div className={styles.pages}>
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
};

export default Layout;
