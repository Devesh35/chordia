import { Badge, Input, Link } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import { Cart, Search } from '@li/design/icons';
import { Routes, logoLarge } from '@md/blaunk/config';
import clsx from 'clsx';
import Image from 'next/image';
import { MenuBar } from './MenuBar';
import { NavHeaderMenu } from './NavHeaderMenu';
import styles from './navHeader.module.css';

type NavHeaderProps = {
  content: 'menu-bar' | 'search';
};

export const NavHeader = ({ content }: NavHeaderProps) => {
  return (
    <header
      className={clsx(styles.wrapper, {
        [styles['wrapper-even']]: content === 'menu-bar',
      })}
    >
      <Link href={Routes.home.path}>
        <Image
          src={logoLarge}
          alt="logo"
          height={32}
          width={142}
          className={styles.blaunk}
        />
      </Link>
      {withConditionCase(content)({
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
        <div className={clsx(styles.item)}>
          <NavHeaderMenu />
        </div>
        <Link className={styles.item} href={Routes.account.cart.path}>
          Cart
          <Badge content={3}>
            <Cart stroke="var(--onprimarydarkaccent)" width={24} height={24} />
          </Badge>
        </Link>
        <Link href={Routes.auth.login.path} className={styles.item}>
          Login
        </Link>
      </div>
    </header>
  );
};
