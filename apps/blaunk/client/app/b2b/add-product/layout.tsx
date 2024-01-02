import { withPageTitle } from '@li/design/enhancers';
import styles from '../b2b.module.css';
import { ReactChildren } from '@li/types/shared';
import { Routes } from '@md/blaunk/config';

const Title = withPageTitle(Routes.b2b.addProduct.title);

const Layout = ({ children }: ReactChildren) => {
  return (
    <Title>
      <div className={styles.profile}>{children}</div>
    </Title>
  );
};

export default Layout;
