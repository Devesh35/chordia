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
};

export const ImageCard = ({
  image,
  details,
  className,
  topLeft,
  topRight,
  imageClassName,
}: Props) => (
  <div className={clsx(styles.wrapper, className)}>
    <div className={styles['top-left']}>{topLeft}</div>
    <div className={styles['top-right']}>{topRight}</div>
    <div className={imageClassName}>
      <Image {...image} />
    </div>
    {details}
  </div>
);
