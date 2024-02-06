import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image-card.module.css';

type Props = {
  image: NextImage;
  details: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
  topLeft?: React.ReactNode;
};

export const ImageCard = ({ image, details, className, topLeft }: Props) => (
  <div className={clsx(styles.wrapper, className)}>
    <div className={styles['top-left']}>{topLeft}</div>
    <Image {...image} />
    {details}
  </div>
);
