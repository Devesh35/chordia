'use client';
import { Link } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getStaticImageSrc } from '@li/design/icons';
import { MenuBarItems } from '@md/blaunk/config';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './menu-bar.module.css';
import { NavHeaderSearch } from './NavHeaderSearch';

type MenuBarProps = {
  variant?: 'separate' | 'navbar';
};

export const MenuBar = ({ variant = 'navbar' }: MenuBarProps) => {
  const isMobile = useMedia();

  return (
    <>
      {isMobile && <NavHeaderSearch content="search" />}
      <div className={clsx(styles.wrapper, styles[`wrapper-${variant}`])}>
        {MenuBarItems.map((item) => (
          <Link
            className={clsx(styles.store, variant ? styles[`store-${variant}`] : '')}
            key={item.id}
            href={item.path}
          >
            <Image
              className={clsx(styles.image)}
              src={getStaticImageSrc(item.icon)}
              width={48}
              height={48}
              alt="random"
            />
            <div className={styles.name}>{item.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
