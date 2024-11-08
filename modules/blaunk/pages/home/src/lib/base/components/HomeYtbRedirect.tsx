'use client';

import { grid } from '@li/config/design';
import clsx from 'clsx';
import styles from './find-vendors.module.css';
import { getStaticImageSrc } from '@li/design/icons';
// import Image from 'next/image';
import { homeYtbRedirect } from '@md/blaunk/config';

export const HomeYtbRedirect = () => {
  return (
    <div
      className={clsx(styles.wrapper, grid['col-6'])}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
    </div>
  );
};
