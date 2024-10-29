'use client';

import { Select } from '@li/design/elements';
import { SelectItem } from '@li/types/design';

type Props = {
  maxHeight?: number;
  options: SelectItem<string>[];
};

export const QuantitySelectorDropdown = ({ maxHeight, options }: Props) => {
  return <Select options={options} maxHeight={maxHeight} placeholder="Quantity" />;
};
