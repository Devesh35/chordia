'use client';

import { Input } from '@li/design/elements';
import { Search } from '@li/design/icons';
import clsx from 'clsx';
import styles from './navHeader.module.css';

type NavHeaderProps = {
  content: 'menu-bar' | 'search';
};

export const NavHeaderSearch = ({ content }: NavHeaderProps) => {
  return (
    <header
      className={clsx(styles.wrapper, {
        [styles['wrapper-even']]: content === 'menu-bar',
      })}
    >
      <Input
        className={styles.input}
        iconLeft={<Search />}
        // iconRight={<Microphone className={gs.clickable} />}
        placeholder="Search for product, brands and more"
      />
    </header>
  );
};
