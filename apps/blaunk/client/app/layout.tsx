import { rs, sbs } from '@li/config/design';
import { ReactChildren } from '@li/types/shared';
import { MenuBar, NavHeader, PageFooter } from '@md/blaunk/pages/layout';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import 'react-phone-input-2/lib/style.css';
import './App.css';
import './base.css';
import styles from './base.module.css';
import blaunkStyles from './blaunk.module.css';
import './global.css';

export const metadata = {
  title: 'Blaunk',
  description: 'Blaunk is global marketplace for buying and selling product.',
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en" className={clsx(rs.root, blaunkStyles.base)}>
      <body className={blaunkStyles.base}>
        <div className={styles.root}>
          <div className={styles.background}>
            <div className={styles.layout}>
              <NavHeader content="search" />
              <MenuBar variant="separate" />
              <div className={`${styles.content} ${sbs.dark}`}>
                <div className={styles.page}>{children}</div>
                <PageFooter />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
