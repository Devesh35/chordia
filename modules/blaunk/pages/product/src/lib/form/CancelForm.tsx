'use client';

import { Button } from '@li/design/elements';
import { Routes } from '@md/blaunk/config';
import { useRouter } from 'next/navigation';

export const CancelForm = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(Routes.product.path)} variant="text">
      Cancel
    </Button>
  );
};
