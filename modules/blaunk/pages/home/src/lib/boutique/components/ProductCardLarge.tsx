'use client';

import { grid } from '@li/config/design';
import { ImageCard } from '@li/design/components';
import { Button } from '@li/design/elements';
import clsx from 'clsx';
import { useState } from 'react';
import { SelectedItem2 } from '../item/SelectedItem2';
import styles from './product.module.css';

type Props = {
  src: string;
  tag?: string;
  action?: string;
  col?: string;
  width?: number;
  height?: number;
};

export const ProductCardLarge = ({ src, tag, action, col = 'col-4', width, height }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <SelectedItem2 isOpen onClose={() => setIsOpen(false)} />}
      <ImageCard
        className={clsx(styles.card, grid[col], { clickable: !!action }, grid['col-t-4'], grid['col-m-6'])}
        onClick={() => action && setIsOpen(true)}
        image={{
          src: src,
          width: width || 600,
          height: height || 700,
          alt: 'random',
        }}
        imageClassName={clsx(styles.image, styles['image-large'])}
        topRight={tag ? <div className={styles['card-tag']}>{tag}</div> : null}
        details={
          action ? (
            <Button variant="secondary" className={styles.shop}>
              {action}
            </Button>
          ) : null
        }
      />
    </>
  );
};
