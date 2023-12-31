// import { Routes } from '@md/blaunk/config';
import styles from './b2b-nav-bar.module.css';
import { Link } from '@li/design/elements';

const navBarItems: { element: React.ReactNode; path: string }[] = [
  // { element: 'BGT', path: 'Routes.b2b.buy.path' },
  { element: 'Buy@B-Bazaar', path: 'Routes.b2b.buy.path' },
  { element: 'Dashboard', path: 'Routes.b2b.dashboard.path' },
  { element: 'Add Product', path: 'Routes.b2b.addProduct.path' },
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
