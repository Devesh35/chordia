'use client';

import { grid } from '@li/config/design';
import {
  FormConfigProvider,
  FormSection,
  FormSectionHeader,
  Labeled,
  Select,
  formStyles,
} from '@li/design/elements';
import {
  AddProductSpecifications,
  BGTProductDetails,
  MenuCategoriesIdType,
  MenuOptions,
  SubMenuOptions,
} from '@md/blaunk/config';
import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';
import { QuantitySection } from './QuantitySection';
import styles from './common.module.css';

export type QuantityType = {
  id: string;
  qty?: number;
  price?: number;
  priceDollar?: number;
};

export const BGT = () => {
  const [data, setData] = useState<QuantityType[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <FormConfigProvider isEdit hasBG>
      <section className={clsx(formStyles.section)}>
        <FormSectionHeader title={'Product Group'} />
        <div className={clsx(formStyles['section-content-wrapper'])}>
          <div
            className={clsx(
              formStyles['section-content'],
              grid.grid,
              grid['grid-t-8'],
            )}
          >
            <StyledLabel label="Group">
              <Select
                placeholder="Select group"
                options={MenuOptions}
                onChange={(e) => setSelectedMenu(e?.id)}
              />
            </StyledLabel>
            <StyledLabel label="Article/service name">
              <Select
                placeholder="Select article"
                options={
                  selectedMenu
                    ? SubMenuOptions[selectedMenu].length
                      ? SubMenuOptions[selectedMenu]
                      : [{ id: '0', item: 'All' }]
                    : [
                        {
                          id: '0',
                          item: 'Select group first',
                          isDisabled: true,
                        },
                      ]
                }
              />
            </StyledLabel>
          </div>
        </div>
      </section>

      <FormSection section={BGTProductDetails} selected={'product-details'} />
      <div className={styles.half}>
        <QuantitySection data={data} onChange={setData} title="Quantity" />
      </div>
      <FormSection section={BGTProductDetails} selected={'product-image'} />
      <FormSection section={AddProductSpecifications} selected="options" />
      <Disclaimer />
      <FormAction />
    </FormConfigProvider>
  );
};

const StyledLabel = ({
  children,
  ...props
}: PropsWithChildren<React.ComponentProps<typeof Labeled>>) => (
  <Labeled
    inline
    {...props}
    className={clsx(
      styles['form-item'],
      grid[`col-4`],
      grid['col-t-4'],
      grid['col-m-6'],
      formStyles['item-label'],
      formStyles['item-label-bg'],
    )}
  >
    {children}
  </Labeled>
);
