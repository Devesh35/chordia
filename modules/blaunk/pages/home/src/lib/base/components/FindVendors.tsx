'use client';

import { grid } from '@li/config/design';
import {
  Button,
  InputAndSelect,
  InputArea,
  Labeled,
  Select,
} from '@li/design/elements';
import {
  CountriesOption,
  MenuCategoriesIdType,
  MenuOptions,
  Purpose,
  SubMenuOptions,
  Units,
} from '@md/blaunk/config';
import { SocialItem } from '@md/blaunk/design';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './find-vendors.module.css';

export const FindVendors = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <div className={clsx(styles.wrapper, grid['col-6'])}>
      <div className={styles.heading}>Let us help you find best vendors</div>
      <div className={styles.content}>
        <div className={styles.form}>
          <Labeled label="Country" className={styles['form-item']}>
            <Select
              placeholder="Select country"
              options={CountriesOption}
              maxHeight={200}
            />
          </Labeled>
          <Labeled label="Group" className={styles['form-item']}>
            <Select
              placeholder="Select group"
              options={MenuOptions}
              maxHeight={200}
              onChange={(e) => setSelectedMenu(e?.id)}
            />
          </Labeled>
          <Labeled label="Article/service name" className={styles['form-item']}>
            <Select
              placeholder="Select article"
              options={
                selectedMenu
                  ? SubMenuOptions[selectedMenu]
                  : [{ id: '0', item: 'Select group first', isDisabled: true }]
              }
              maxHeight={200}
            />
          </Labeled>
          <Labeled label="Purpose" className={styles['form-item']}>
            <Select
              options={Purpose.map((i) => ({ id: i.id, item: i.label }))}
              placeholder="Select purpose"
            />
          </Labeled>
          <Labeled label="Qty" className={styles['form-item-full']}>
            <InputAndSelect
              input={{ placeholder: 'Enter qty', type: 'number' }}
              select={{
                options: Units.map((u) => ({ id: u, item: u })),
                placeholder: 'Select unit',
                maxHeight: 200,
              }}
              inputFlex={0.9}
            />
          </Labeled>
          <Labeled label="Requirements" className={styles['form-item-full']}>
            <InputArea
              rows={4}
              className={styles['input-area']}
              placeholder="Specify your requirements in max 500 words e.g. Name, color, size, MOQ, material, custom, etc."
            />{' '}
          </Labeled>
        </div>
        <div className={styles.action}>
          <SocialItem type="whatsapp" />
          <SocialItem type="gmail" />
          <Button>Submit requirements</Button>
        </div>
      </div>
    </div>
  );
};
