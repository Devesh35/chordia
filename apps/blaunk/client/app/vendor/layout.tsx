import { Routes } from '@md/blaunk/config';
import { ReactChildren } from '@li/types/shared';
import styles from '../base.module.css';
import clsx from 'clsx';

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
