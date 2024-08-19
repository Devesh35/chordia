'use client';

import { grid } from '@li/config/design';
import {
  FormDocument,
  FormSectionWrapper,
  Input,
  Labeled,
  Select,
} from '@li/design/elements';
import { SelectItem, SelectItemElement } from '@li/types/design';
import {
  AdvertisementSubTypeOptions,
  AdvertisementTypeOptions,
  CountriesOption,
} from '@md/blaunk/config';
import clsx from 'clsx';
import { useState } from 'react';

const formItemClassName = clsx(grid[`col-2`], grid['col-t-3'], grid['col-m-6']);

export const AddAd = () => {
  const [selectedAdvertisement, setSelectedAdvertisement] =
    useState<SelectItem>();

  const subAdvTypes: SelectItemElement[] = selectedAdvertisement
    ? AdvertisementSubTypeOptions[
        selectedAdvertisement?.id as keyof typeof AdvertisementSubTypeOptions
      ]
    : [
        {
          id: '0',
          item: 'Select Type First',
        },
      ];

  return (
    <>
      <FormSectionWrapper>
        <Labeled label={'Country'} className={formItemClassName}>
          <Select placeholder="Select Country" options={CountriesOption} />
        </Labeled>
        <Labeled label={'Type'} className={formItemClassName}>
          <Select
            placeholder="Select Type"
            options={AdvertisementTypeOptions}
            onChange={(selected) => setSelectedAdvertisement(selected)}
          />
        </Labeled>
        <Labeled label={'Ads'} className={formItemClassName}>
          <Select placeholder="Select Ads" options={subAdvTypes} />
        </Labeled>
        <Labeled label={'Zip-code/Pin-code'} className={formItemClassName}>
          <Input type="number" />
        </Labeled>
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Labeled label="Ad Image" className={formItemClassName}>
          <FormDocument id={'ad-image'} label="Ad Image" required />
        </Labeled>
      </FormSectionWrapper>
    </>
  );
};
