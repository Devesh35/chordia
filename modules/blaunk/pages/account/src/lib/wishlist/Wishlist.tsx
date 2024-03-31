import { PageHeader, ScrollableSnap } from '@li/design/elements';
import WishlistItem, { dummyItems } from './WishlistItem';
import styles from './wishlist.module.css';

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
              <ScrollableSnap
                controls
                className={styles['section-items']}
                delta={440}
              >
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
