'use client';

import { Button, Modal } from '@li/design/elements';
import { useState } from 'react';
import { Add } from './Add';

export const AddModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        title={'Add Product'}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Add />
      </Modal>
      <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
        Add Product
      </Button>
    </>
  );
};
