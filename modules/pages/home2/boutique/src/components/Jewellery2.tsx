import { grid } from '@li/config/design';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './just-dropped.module.css';

const products = getRandomImagesArray(6)(300, 500, 'jewellery').map((src) => (
  <Image
    src={src}
    className={clsx(grid['col-4'], styles.card)}
    width={500}
    height={300}
    alt="Jewellery"
  />
));

export const Jewellery2 = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="INDIAN JEWELLERY COLLECTION" />
      <div className={clsx(grid.grid, styles.grid)}>{products}</div>
    </div>
  );
};
