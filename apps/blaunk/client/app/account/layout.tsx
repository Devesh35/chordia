import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';

const Index = ({ children }: ReactChildren) => {
  return <div className={styles['page-small']}>{children}</div>;
};

export default Index;
