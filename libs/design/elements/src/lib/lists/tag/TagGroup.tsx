'use client';
import { gs, sbs } from '@li/config/design';
import { CircleClose } from '@li/design/icons';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import styles from './tag-group.module.css';

type Props = {
  items: {
    id: string;
    label: string;
  }[];
  isSelectable?: boolean;
};

export const TagGroup = ({ items, isSelectable = false }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);

  const toggleTag = useCallback((id: string) => {
    setSelectedTag(
      (cat) =>
        (cat = cat.includes(id) ? cat.filter((c) => c !== id) : [...cat, id]),
    );
  }, []);

  return (
    <div className={clsx(styles.container, sbs.none)}>
      <div className={clsx(styles.wrapper, sbs.dark)}>
        {items.map((item) => (
          <div
            className={clsx(styles.item, {
              [styles['item-selectable']]: isSelectable,
              [styles['item-selected']]: selectedTag.includes(item.id),
            })}
            key={item.id}
            onClick={() => isSelectable && toggleTag(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {isSelectable && (
        <div
          className={clsx(styles.clear, {
            [styles['clear-active']]: !!selectedTag.length,
            [gs.clickable]: !!selectedTag.length,
          })}
        >
          <CircleClose onClick={() => setSelectedTag([])} />
        </div>
      )}
    </div>
  );
};
