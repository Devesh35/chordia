import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image-card.module.css';

type Props = {
  image: NextImage;
  details: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
};

export const ImageCard = ({ image, details, className }: Props) => (
  <div className={clsx(styles.wrapper, className)}>
    <Image {...image} />
    {details}
  </div>
);
