import styles from '../b2b.module.css'; 
import { ReactChildren } from '@li/types/shared';

const Layout = ({ children }: ReactChildren) => {
  return <div className={styles.profile}>{children}</div>;
};

export default Layout;
