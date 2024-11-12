import styles from './boutique.module.css';
import { BoutiqueSearch } from './components/BoutiqueSearch';
import { TopSlider } from './components/TopSlider';
import { BType } from './components/Type';

export const BoutiqueType = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['top-offer']}>BUY 2 GET 1 LIMITED OFFER</div>
      <TopSlider />
      <div className="mt-4">
        <BoutiqueSearch />
      </div>
      <BType />
    </div>
  );
};
