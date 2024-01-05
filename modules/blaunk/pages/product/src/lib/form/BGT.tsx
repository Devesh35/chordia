import { FormSection } from '@li/design/elements';
import { BGTProductDetails, MenuCategoriesId } from '@md/blaunk/config';
import React from 'react';

export const BGT = () => {
  console.log('MenuCategoriesId', MenuCategoriesId);

  return (
    <div>
      <FormSection {...BGTProductDetails} isEdit />
    </div>
  );
};
