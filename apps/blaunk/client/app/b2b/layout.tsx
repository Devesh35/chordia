import { B2BNavbar, MenuBar } from '@md/blaunk/pages/layout';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <MenuBar />
      <div className={styles.pages}>
        <B2BNavbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
