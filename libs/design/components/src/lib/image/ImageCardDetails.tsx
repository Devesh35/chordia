import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image-card-details.module.css';

type Props = {
  image: NextImage;
  details: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
};

export const ImageCardDetails = ({ image, details, className }: Props) => (
  <div className={clsx(styles.wrapper, className)}>
    <Image {...image} />
    <div className={styles.details}>{details}</div>
  </div>
);
