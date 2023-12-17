import { ReactChildren } from '@li/types/shared';
import React from 'react';
import styles from '../base.module.css';
import { AuthLayout } from '@md/blaunk/pages/auth';
import { loginBg } from '@md/blaunk/config';

const Layout = ({ children }: ReactChildren) => {
  return (
    <div style={{ backgroundImage: `url(${loginBg.src})` }}>
      <div className={styles.pages}>
        <AuthLayout>{children}</AuthLayout>
      </div>
    </div>
  );
};

export default Layout;
