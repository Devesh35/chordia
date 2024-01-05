import { ReactChildren } from '@li/types/shared';
import React from 'react';
import { AuthLayout } from '@md/blaunk/pages/auth';
import { loginBg } from '@md/blaunk/config';

const Layout = ({ children }: ReactChildren) => {
  return (
    <div style={{ backgroundImage: `url(${loginBg.src})` }}>
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
};

export default Layout;
