import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image-card.module.css';

type Props = {
  image: NextImage;
  details?: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  imageClassName?: string;
  onClick?: () => void;
};

export const ImageCard = ({ image, onClick, details, className, topLeft, topRight, imageClassName }: Props) => (
  <div className={clsx(styles.wrapper, className)} onClick={onClick}>
    <div className={styles['top-left']}>{topLeft}</div>
    <div className={styles['top-right']}>{topRight}</div>
    <div className={clsx(imageClassName)}>
      <Image {...image} className={styles['image-center']} />
    </div>
    {details}
  </div>
);
