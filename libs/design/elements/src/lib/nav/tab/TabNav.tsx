'use client';

import React, { useEffect, useState, useMemo } from 'react';
import styles from './tab-nav.module.css';
import clsx from 'clsx';
import { ClassName } from '@li/types/shared';

type Tab<T> = {
  id: T;
  label: React.ReactNode;
  content: React.ReactNode;
};

type TabNavProps<T> = {
  tabs: Tab<T>[];
  active?: T;
} & Partial<ClassName>;

export const TabNav = <T extends string | number>({
  tabs,
  active,
  className,
}: TabNavProps<T>) => {
  const [activeTab, setActiveTab] = useState<T>(tabs[0].id);
  useEffect(() => active && setActiveTab(active), [active]);

  const content = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.content,
    [tabs, activeTab],
  );

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.list}>
        {tabs.map(({ id, label }) => (
          <span
            key={id}
            className={clsx(styles.item, {
              [styles.active]: id === activeTab,
            })}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </span>
        ))}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
