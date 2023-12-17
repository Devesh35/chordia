import { B2BNavbar } from '@md/blaunk/pages/layout';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <B2BNavbar />
      <div className={styles.pages}>{children}</div>
    </>
  );
};

export default Layout;
