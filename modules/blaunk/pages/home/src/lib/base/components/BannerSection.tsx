import { getRandomImagesArray } from '@md/blaunk/config';
import { CarousalCenter } from '@li/design/elements';
// import Image from 'next/image';
import styles from './banner.module.css';

const img = getRandomImagesArray(6);

export const BannerSection = ({ size = 200 }: { size?: number }) => {
  return (
    <CarousalCenter className={styles.carousal} hidePagination>
      {img(size, size * 2).map((id, i) => (
        <img key={id} src={id} width={size * 2.5} height={size * 1.4} alt="random" />
      ))}
    </CarousalCenter>
  );
};
