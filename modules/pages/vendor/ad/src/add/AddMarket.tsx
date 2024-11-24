'use client';

import { FormSection } from '@li/design/elements';
import { MarketForm } from '@md/blaunk/config';

export const AddMarket = () => {
  return (
    <>
      <FormSection section={MarketForm} selected="market" />
      <FormSection section={MarketForm} selected="market-desc" />
      <FormSection section={MarketForm} selected="market-image" />
    </>
  );
};
