'use client';

import { grid } from '@li/config/design';
import { getStaticImageSrc } from '@li/design/icons';
import { homeYtbRedirect, Routes } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './find-vendors.module.css';

export const HomeYtbRedirect = () => {
  return (
    <a
      href={Routes.home.bgt.path}
      className={clsx(styles.wrapper, grid['col-6'], grid['col-m-6'])}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
    >
      <img
        src={getStaticImageSrc(homeYtbRedirect)}
        alt="cake_banner"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </a>
  );
};
