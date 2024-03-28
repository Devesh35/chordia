import { ReactChildren } from '@li/types/shared';
import { loginBg } from '@md/blaunk/config';
import { AuthLayout } from '@md/blaunk/pages/auth';

const Layout = ({ children }: ReactChildren) => {
  return (
    <div style={{ backgroundImage: `url(${loginBg.src})` }}>
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
};

export default Layout;
