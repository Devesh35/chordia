'use client';

import {
  Button,
  Input,
  Labeled,
  Select,
  SelectSuper,
} from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { SelectItemElement } from '@li/types/design';
import { ProductType, subscriptionConfig } from '@md/blaunk/config';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import styles from './subscription-modal.module.css';

type OptionType = SelectItemElement & { item: number; fee: number };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { id: ProductType; ui?: any };
export const NewSubscription = ({ id, ui }: Props) => {
  const selectedItem = subscriptionConfig[id].items;

  const [selectedCategory, setSelectedCategory] = useState<SelectItemElement>();
  const [selectedOption, setSelectedOption] = useState<OptionType>();

  useEffect(() => setSelectedOption(undefined), [selectedCategory]);

  const categoryOptions = useMemo(
    () =>
      selectedItem.map((i) => ({
        id: i.category,
        item: i.category,
      })) || [],
    [selectedItem],
  );

  const selectedItemCategory = useMemo(
    () => selectedItem.find((i) => selectedCategory?.id === i.category),
    [selectedCategory?.id, selectedItem],
  );

  const listingOptions = useMemo(
    () =>
      selectedItemCategory?.options.map((i) => ({
        id: `${i.page}`,
        item: i.page,
        fee: i.fee,
      })) || [],
    [selectedItemCategory],
  );

  console.log({ selectedCategory, selectedItemCategory, selectedOption });

  return (
    <div className={styles.content}>
      <Labeled label="Category">
        <Select options={categoryOptions} onChange={setSelectedCategory} />
      </Labeled>
      <Labeled label={ui?.Listing || 'Listing Page'}>
        {withCondition(!!selectedCategory)(
          <Select
            options={listingOptions}
            onChange={(item) => setSelectedOption(item)}
          />,
          <SelectSuper item="Select category" />,
        )}
      </Labeled>
      {withCondition(!!selectedOption)(
        <>
          <Labeled label="Renewal Date">
            <Input type="date" isReadOnly defaultValue={'2024-01-04'} />
          </Labeled>
          <div className={clsx(styles['total-wrapper'])}>
            <div className={styles.charges}>Charges</div>
            <Labeled label="Fees">
              <span className={styles['fees-item']}>
                {selectedOption?.fee || 0}
              </span>
              {/* <Input isReadOnly value={selectedOption?.fee || 0} /> */}
            </Labeled>
            <Labeled label="GST (18%)">
              <span className={styles['fees-item']}>
                {(selectedOption?.fee || 0) * 0.18}
              </span>
              {/* <Input isReadOnly value={(selectedOption?.fee || 0) * 0.18} /> */}
            </Labeled>
            {withCondition(!!selectedOption?.fee)(
              <Labeled label="Voucher">
                <Input placeholder="Redeem Voucher" />
              </Labeled>,
            )}
            <Labeled label="Total">
              <span className={styles['fees-item']}>
                {(selectedOption?.fee || 0) * 1.18}
              </span>
              {/* <Input isReadOnly value={(selectedOption?.fee || 0) * 1.18} /> */}
            </Labeled>
          </div>
          <Button className={styles.proceed}>Proceed</Button>
        </>,
      )}
    </div>
  );
};
