import Image from 'next/image';
import { Badge, Input } from '@li/design/elements';
import { Cart, DownFilled, Microphone, Search } from '@li/design/icons';
import { logoLarge } from '@md/blaunk/config';
import styles from './navHeader.module.css';

export const NavHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={logoLarge} alt="logo" height={36} width={160} />

      <Input
        className={styles.input}
        iconLeft={<Search />}
        iconRight={<Microphone />}
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
        <div className={styles.item}>
          Login
          <DownFilled fill="white" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};
