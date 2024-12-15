import { gs } from '@li/config/design';
import { NextImage } from '@li/types/shared';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './image-card-overlay.module.css';

type Props = {
  image: NextImage;
  isClickable?: boolean;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  onClick?: () => void;
  noFillet?: boolean;
};

export const ImageCardOverlay = ({ image, top, bottom, noFillet, onClick, isClickable = false }: Props) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [gs.clickable]: isClickable,
      })}
      style={{
        width: image.width,
        height: image.height,
        borderRadius: noFillet ? 0 : 'var(--border-radius-large)',
      }}
      onClick={onClick}
    >
      <Image {...image} />
      <div className={styles.overlay}>
        {top || <div />}
        {bottom}
      </div>
    </div>
  );
};
