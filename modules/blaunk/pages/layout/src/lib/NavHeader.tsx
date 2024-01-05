import Image from 'next/image';
import { Badge, Link } from '@li/design/elements';
import { Cart } from '@li/design/icons';
import { Routes, logoLarge } from '@md/blaunk/config';
import styles from './navHeader.module.css';
import { MenuBar } from './MenuBar';
import clsx from 'clsx';
import { NavHeaderMenu } from './NavHeaderMenu';

export const NavHeader = () => {
  return (
    <header className={styles.wrapper}>
      <Link href={Routes.home.path}>
        <Image
          src={logoLarge}
          alt="logo"
          height={32}
          width={142}
          className={styles.blaunk}
        />
      </Link>

      <MenuBar />

      {/* <Input
        className={styles.input}
        iconLeft={<Search />}
        iconRight={<Microphone className={gs.clickable} />}
        placeholder="Search for product, brands and more"
      /> */}

      <div className={styles.items}>
        <div className={clsx(styles.item)}>
          <NavHeaderMenu />
        </div>
        <div className={styles.item}>
          Cart
          <Badge content={3}>
            <Cart stroke="var(--onprimarydarkaccent)" width={24} height={24} />
          </Badge>
        </div>
        <Link href={Routes.auth.login.path} className={styles.item}>
          Login
        </Link>
      </div>
    </header>
  );
};
