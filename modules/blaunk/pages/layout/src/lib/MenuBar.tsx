import { MenuBarItems, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './menu-bar.module.css';
import { Link } from '@li/design/elements';
import clsx from 'clsx';

type MenuBarProps = {
  variant?: 'separate' | 'navbar';
};

const ads = (variant: MenuBarProps['variant']) =>
  getRandomImagesArray(MenuBarItems.length)(48).map((src, i) => (
    <Link
      className={clsx(styles.store, variant ? styles[`store-${variant}`] : '')}
      key={src}
      href={MenuBarItems[i].path}
    >
      <Image
        className={clsx(styles.image)}
        src={src}
        width={48}
        height={48}
        alt="random"
      />
      <div className={styles.name}>{MenuBarItems[i].name}</div>
    </Link>
  ));

export const MenuBar = ({ variant = 'navbar' }: MenuBarProps) => {
  return (
    <div className={clsx(styles.wrapper, styles[`wrapper-${variant}`])}>
      {ads(variant)}
    </div>
  );
};
