import { getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './menu-bar.module.css';

const names = ['Tour', 'Store', 'Cake', 'Boutique'];

const ads = getRandomImagesArray(4)(48).map((src, i) => (
  <div className={styles.store} key={src}>
    <Image
      className={styles.image}
      src={src}
      width={48}
      height={48}
      alt="random"
    />
    <div className={styles.name}>{names[i]}</div>
  </div>
));

export const MenuBar = () => {
  return <div className={styles.wrapper}>{ads}</div>;
};
