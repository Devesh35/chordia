'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ClassName } from '@li/types/shared';
import { Modal } from '../../overlays';

export type EnlargeableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  enlargedWidth: number;
  enlargedHeight: number;
} & Partial<ClassName>;

export const EnlargeableImage = ({
  className,
  enlargedWidth,
  enlargedHeight,
  ...props
}: EnlargeableImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image {...props} width={enlargedWidth} height={enlargedHeight} />
      </Modal>
      <Image
        {...props}
        style={{ cursor: 'pointer' }}
        onClick={() => setIsModalOpen(true)}
      />
    </>
  );
};
