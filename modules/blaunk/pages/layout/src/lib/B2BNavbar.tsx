import { Routes } from '@md/blaunk/config';
import styles from './b2b-nav-bar.module.css';
import { Link } from '@li/design/elements';

const navBarItems: { element: React.ReactNode; path: string }[] = [
  { element: 'World-trade', path: Routes.b2b.buy.path },
  { element: 'Profile', path: Routes.b2b.profile.path },
  { element: 'Agreement', path: Routes.b2b.agreement.path },
  { element: 'Sell', path: Routes.b2b.sell.path },
  { element: 'Cart', path: Routes.b2b.cart.path },
  { element: 'Order', path: Routes.b2b.order.path },
];

export const B2BNavbar = () => {
  return (
    <div className={styles.wrapper}>
      {navBarItems.map((item) => (
        <Link href={item.path} key={item.path}>
          {item.element}
        </Link>
      ))}
    </div>
  );
};
