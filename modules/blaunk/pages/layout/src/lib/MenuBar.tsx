import { MenuBarItems, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './menu-bar.module.css';
import { Link } from '@li/design/elements';

const ads = getRandomImagesArray(MenuBarItems.length)(48).map((src, i) => (
  <Link className={styles.store} key={src} href={MenuBarItems[i].path}>
    <Image
      className={styles.image}
      src={src}
      width={48}
      height={48}
      alt="random"
    />
    <div className={styles.name}>{MenuBarItems[i].name}</div>
  </Link>
));

export const MenuBar = () => {
  return <div className={styles.wrapper}>{ads}</div>;
};
