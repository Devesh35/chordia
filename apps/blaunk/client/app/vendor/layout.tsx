import { ReactChildren } from '@li/types/shared';
import { Routes } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from '../base.module.css';

const Index = ({ children }: ReactChildren) => {
  return (
    <>
      <title>{Routes.vendor.title}</title>
      <div className={clsx(styles['page-small'], styles['min-full'])}>
        {children}
      </div>
    </>
  );
};

export default Index;
