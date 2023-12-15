import { MenuBar } from '@md/blaunk/pages/layout';
import { Routes } from '@md/blaunk/config';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <title>{Routes.home.title}</title>
      <MenuBar />
      <div className={styles.pages}>{children}</div>
    </>
  );
};

export default Layout;
