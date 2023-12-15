import { MenuBar } from '@md/blaunk/pages/layout';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';
import clsx from 'clsx';

// Remove full page when home has content and does not redirect
const Layout = ({ children }: ReactChildren) => {
  return (
    <>
      <MenuBar />
      <div className={clsx(styles.pages, styles['full-page'])}>{children}</div>
    </>
  );
};

export default Layout;
