import { Routes } from '@md/blaunk/config';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';

const Index = ({ children }: ReactChildren) => {
  return (
    <>
      <title>{Routes.product.title}</title>
      <div className={styles['page-small']}>{children}</div>
    </>
  );
};

export default Index;
