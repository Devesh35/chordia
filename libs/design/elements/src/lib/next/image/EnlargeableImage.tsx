'use client';

import { useMedia } from '@li/design/hooks';
import { ClassName } from '@li/types/shared';
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../../overlays';

export type EnlargeableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  enlargedWidth: number;
  enlargedHeight: number;
} & Partial<ClassName>;

export const EnlargeableImage = ({ className, enlargedWidth, enlargedHeight, ...props }: EnlargeableImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMedia();

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image {...props} width={enlargedWidth} height={enlargedHeight} />
      </Modal>
      <Image
        {...props}
        style={{ cursor: 'pointer', maxWidth: isMobile ? '100%' : '90%' }}
        onClick={() => setIsModalOpen(true)}
      />
    </>
  );
};
