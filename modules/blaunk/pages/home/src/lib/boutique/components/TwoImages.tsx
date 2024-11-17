import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './two-images.module.css';

const products = getRandomImagesArray(2)(600, 900, 'saree').map((src, i) => (
  <Image src={src} className={clsx(styles.card)} width={900} height={400} alt="Jewellery" />
));

export const TwoImages = () => {
  return <div className={styles.wrapper}>{products}</div>;
};
