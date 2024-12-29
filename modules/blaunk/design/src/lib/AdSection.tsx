import { Marquee } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './ad-section.module.css';

const img = getRandomImagesArray(6);

export const RollingAd = ({ size = 200 }: { size?: number }) => {
  const isMobile = useMedia('mobile');
  const sy = isMobile ? size / 2 : size;

  return (
    <Marquee className={styles.marquee} pauseOhHover itemsGap={4} isInfinite>
      {img(sy, sy * 2).map((id, i) => (
        <Image key={id} src={id} width={sy * 2} height={sy} alt="random" />
      ))}
    </Marquee>
  );
};
