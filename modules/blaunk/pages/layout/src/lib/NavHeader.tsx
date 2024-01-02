import Image from 'next/image';
import { Badge, Input, Link } from '@li/design/elements';
import { Cart, DownFilled, Microphone, Search } from '@li/design/icons';
import { Routes, logoLarge } from '@md/blaunk/config';
import styles from './navHeader.module.css';
import { gs } from '@li/config/design';

export const NavHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={Routes.home.path}>
        <Image src={logoLarge} alt="logo" height={30} width={142} className={styles.blaunk} />
      </Link>

      <Input
        className={styles.input}
        iconLeft={<Search />}
        iconRight={<Microphone className={gs.clickable} />}
        placeholder="Search for products, brands and more"
      />

      <div className={styles.items}>
        <div className={styles.item}>
          Welcome
          <DownFilled fill="white" width={20} height={20} />
        </div>
        <div className={styles.item}>
          Cart
          <Badge content={3}>
            <Cart stroke="var(--onprimarydarkaccent)" width={24} height={24} />
          </Badge>
        </div>
        <Link href={Routes.auth.login.path}>
          <div className={styles.item}>Login</div>
        </Link>
      </div>
    </div>
  );
};
