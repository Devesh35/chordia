import { PageHeader, ScrollableSnap } from '@li/design/elements';
import styles from './wishlist.module.css';
import WishlistItem, { dummyItems } from './WishlistItem';

const sections = ['Boutique', 'Cake', 'Tour', 'Store'];

export const Wishlist = () => {
  return (
    <div>
      <PageHeader title={'Wishlist'} />
      <div className={styles.container}>
        {sections.map((section) => (
          <div className={styles.section}>
            <div className={styles['section-title']}>{section}</div>
            <div className={styles['section-items-wrapper']}>
              <ScrollableSnap controls className={styles['section-items']}>
                {dummyItems.map((item) => (
                  <WishlistItem {...item} key={item.name} />
                ))}
              </ScrollableSnap>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
