import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
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
  fav?: boolean;
  favCorner?: boolean;
  hover?: boolean;
};

export const ImageCard = ({
  image,
  onClick,
  favCorner,
  details,
  className,
  topLeft,
  topRight,
  imageClassName,
  hover,
  fav,
}: Props) => (
  <div
    className={clsx(styles.wrapper, className, {
      [styles['wrapper-hover']]: hover,
    })}
    onClick={onClick}
  >
    <div className={styles['top-left']}>{topLeft}</div>
    <div className={styles['top-right']}>{topRight}</div>
    <div className={clsx(imageClassName)}>
      <Image {...image} className={styles['image-center']} />
    </div>
    {fav && <FaHeart className={styles['heart']} color={'red'} size={28} />}
    {favCorner && <FaHeart className={styles['heart-corner']} color={'red'} size={28} />}
    {details}
  </div>
);
