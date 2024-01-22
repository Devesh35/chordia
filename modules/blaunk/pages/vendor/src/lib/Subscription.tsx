'use client';

import { FormSectionHeader, Input, Labeled, Select } from '@li/design/elements';
import { subscriptionConfig, subscriptionMenuOptions } from '@md/blaunk/config';
import styles from './subscription.module.css';
import { grid } from '@li/config/design';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { SelectItemElement } from '@li/types/design';

type OptionType = SelectItemElement & { item: number; fee: number };

const itemClassName = clsx(grid['col-4'], grid['col-t-3'], grid['col-m-6']);

export const Subscription = () => {
  const [selected, setSelected] =
    useState<(typeof subscriptionMenuOptions)[0]>();
  const [selectedCat, setSelectedCat] = useState<SelectItemElement>();
  const [selectedOption, setSelectedOption] = useState<OptionType>();

  const selectedItem = useMemo(
    () => (selected ? subscriptionConfig[selected.id] : undefined),
    [selected],
  );

  const categoryOptions = useMemo(
    () =>
      selectedItem?.map((i) => ({
        id: i.category,
        item: i.category,
      })) || [],
    [selectedItem],
  );

  const selectedItemCategory = useMemo(
    () => selectedItem?.find((i) => selectedCat?.id === i.category),
    [selectedCat?.id, selectedItem],
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

  return (
    <div>
      <FormSectionHeader title={'Subscription'} className={styles.header} />
      <div className={styles.content}>
        <div className={clsx(grid.grid, styles.grid, styles['grid-wrapper'])}>
          <div
            className={clsx(grid['col-8'], grid['col-t-6'], grid['col-m-6'])}
          >
            <div className={clsx(grid.grid, styles.grid)}>
              <Labeled label="Menu" className={itemClassName}>
                <Select
                  options={subscriptionMenuOptions}
                  onChange={setSelected}
                />
              </Labeled>
              {selectedItem && (
                <Labeled label="Category" className={itemClassName}>
                  <Select options={categoryOptions} onChange={setSelectedCat} />
                </Labeled>
              )}
              {selectedItemCategory && (
                <Labeled label="Listing Page" className={itemClassName}>
                  <Select
                    options={listingOptions}
                    onChange={(item) => setSelectedOption(item)}
                  />
                </Labeled>
              )}
            </div>
            {selectedOption && (
              <div
                className={clsx(grid.grid, styles.grid, styles['grid-wrapper'])}
              >
                <Labeled label="Renewal Date" className={itemClassName}>
                  <Input type="date" isReadOnly defaultValue={'2024-01-04'} />
                </Labeled>
                <Labeled label="Remark" className={itemClassName}>
                  <Select
                    options={[
                      { id: 'renewed', item: 'Renewed' },
                      { id: 'pending', item: 'Renewal pending' },
                      { id: 'deListed', item: 'De-listed' },
                    ]}
                  />
                </Labeled>
              </div>
            )}
          </div>
          <div
            className={clsx(
              grid['col-4'],
              grid['col-t-2'],
              grid['col-m-6'],
              styles['total-wrapper'],
            )}
          >
            <Labeled label="Fees">
              <Input isReadOnly defaultValue={selectedOption?.fee || 0} />
            </Labeled>
            <Labeled label="GST (18%)">
              <Input
                isReadOnly
                defaultValue={(selectedOption?.fee || 0) * 0.18}
              />
            </Labeled>
            <Labeled label="Voucher">
              <Input placeholder="Redeem Voucher" />
            </Labeled>
            <Labeled label="Total">
              <Input
                isReadOnly
                defaultValue={(selectedOption?.fee || 0) * 1.18}
              />
            </Labeled>
          </div>
        </div>
      </div>
    </div>
  );
};
