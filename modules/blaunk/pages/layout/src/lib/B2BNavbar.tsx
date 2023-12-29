import { Routes } from '@md/blaunk/config';
import styles from './b2b-nav-bar.module.css';
import { Link } from '@li/design/elements';

const navBarItems: { element: React.ReactNode; path: string }[] = [
  { element: 'World-trade', path: Routes.b2b.buy.path },
  { element: 'Profile', path: Routes.b2b.profile.path },
  { element: 'Add Product', path: Routes.b2b.addProduct.path },
  { element: 'Agreement', path: Routes.b2b.agreement.path },
  { element: 'Sell@B-Bazaar', path: Routes.b2b.sell.path },
  { element: 'Cart', path: Routes.b2b.cart.path },
  { element: 'My post', path: Routes.b2b.myPost.path },
  { element: 'Dashboard', path: Routes.b2b.dashboard.path },
  { element: 'Order', path: Routes.b2b.order.path },
  { element: 'Shipment', path: Routes.b2b.shipment.path },
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
