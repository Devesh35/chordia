import { ReactChildren } from '@li/types/shared';
import { Routes } from '@md/blaunk/config';
import styles from '../base.module.css';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <title>{Routes.login.title}</title>
      <div className={styles.pages}>{children}</div>
    </>
  );
};

export default Layout;
