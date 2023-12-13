import Image from 'next/image';
import { NextImage } from '@li/types/shared';
import styles from './image-card-overlay.module.css';
import clsx from 'clsx';
import { gs } from '@li/config/design';

type Props = {
  image: NextImage;
  isClickable?: boolean;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
};

export const ImageCardOverlay = ({
  image,
  top,
  bottom,
  isClickable = false,
}: Props) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [gs.clickable]: isClickable,
      })}
      style={{
        width: image.width,
        height: image.height,
      }}
    >
      <Image {...image} />
      <div className={styles.overlay}>
        {top || <div />}
        {bottom}
      </div>
    </div>
  );
};
