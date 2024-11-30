'use client';

import { Input, Link } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import { useMedia } from '@li/design/hooks';
import { Search } from '@li/design/icons';
import { Routes, logoLarge } from '@md/blaunk/config';
import clsx from 'clsx';
import Image from 'next/image';
import { MenuBar } from './MenuBar';
import { NavB2BHeader } from './NavB2BHeader';
import { NavHeaderMenu } from './NavHeaderMenu';
import styles from './navHeader.module.css';

type NavHeaderProps = {
  content: 'menu-bar' | 'search';
};

export const NavHeader = ({ content }: NavHeaderProps) => {
  const isMobile = useMedia();

  return (
    <header
      className={clsx(styles.wrapper, {
        [styles['wrapper-even']]: content === 'menu-bar',
      })}
    >
      <Link href={Routes.home.path}>
        <Image src={logoLarge} alt="logo" height={32} width={142} className={styles.blaunk} />
      </Link>
      {!isMobile &&
        withConditionCase(content)({
          'menu-bar': <MenuBar />,
          search: (
            <Input
              className={styles.input}
              iconLeft={<Search />}
              // iconRight={<Microphone className={gs.clickable} />}
              placeholder="Search for product, brands and more"
            />
          ),
          default: '',
        })}

      <div className={styles.items}>
        <div className={clsx(styles.item, styles['item-select'])}>
          <NavHeaderMenu />
        </div>
        <div className={clsx(styles.item, styles['item-select'])}>
          <NavB2BHeader />
        </div>
        {!isMobile && (
          <Link href={Routes.auth.login.path} className={styles.item}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
