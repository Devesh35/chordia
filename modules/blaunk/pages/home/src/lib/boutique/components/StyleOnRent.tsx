import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import styles from './just-dropped.module.css';
import { ProductCard } from './ProductCard';

const products = getRandomImagesArray(12)(400, 500, 'saree').map((src, i) => (
  <ProductCard
    src={src}
    action="View more"
    tag="FOR RENT"
    col="col-4"
    width={300}
  />
));

export const StyleOnRent = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="STYLE ON RENT" />
      <ScrollableSnap className={styles['rent-products']} controls>
        {products}
      </ScrollableSnap>
      {/* <div className={clsx(grid.grid, styles.grid)}>{products}</div> */}
    </div>
  );
};
