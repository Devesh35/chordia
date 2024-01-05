'use client';

import { Labeled, Select } from '@li/design/elements';
import { ProductTypeOptions } from '@md/blaunk/config';
import styles from './add.module.css';
import { useState } from 'react';
import { withCondition, withConditionCase } from '@li/design/enhancers';
import { BGT } from './form/BGT';
import { Boutique } from './form/Boutique';
import { Cake } from './form/Cake';
import { Tour } from './form/Tour';

export const Add = () => {
  const [selectedType, setSelectedType] =
    useState<(typeof ProductTypeOptions)[number]>();

  return (
    <div>
      {withCondition(!selectedType)(
        <Labeled
          label="Select product type to add:"
          inline
          className={styles['select-type']}
        >
          <Select options={ProductTypeOptions} onChange={setSelectedType} />
        </Labeled>,
      )}
      {selectedType
        ? withConditionCase(selectedType.id)({
            BGT: <BGT />,
            Boutique: <Boutique />,
            Cake: <Cake />,
            Tour: <Tour />,
          })
        : null}
    </div>
  );
};
