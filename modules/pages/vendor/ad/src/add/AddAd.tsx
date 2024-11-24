'use client';

import { FormSection } from '@li/design/elements';
import { AdvertisementForm } from '@md/blaunk/config';

export const AddAd = () => {
  return (
    <>
      <FormSection section={AdvertisementForm} selected="details" />
      <FormSection section={AdvertisementForm} selected="docs" />
    </>
  );
};
