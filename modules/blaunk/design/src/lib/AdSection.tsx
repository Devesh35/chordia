import { getRandomImagesArray } from '@md/blaunk/config';
import { Marquee } from '@li/design/elements';
import Image from 'next/image';
import styles from './ad-section.module.css';

const img = getRandomImagesArray(6);

export const AdSection = ({ size = 200 }: { size?: number }) => {
  return (
    <Marquee className={styles.marquee} pauseOhHover itemsGap={24} isInfinite>
      {img(size, size * 2).map((id, i) => (
        <Image key={id} src={id} width={size * 2} height={size} alt="random" />
      ))}
    </Marquee>
  );
};
