import { PaginationBlaunk } from '@md/blaunk/design';
import styles from './boutique.module.css';
import { BoutiqueSearch2 } from './components/BoutiqueSearch2';
import { BType } from './components/Type';

export const BoutiqueType = () => {
  return (
    <div className={styles.wrapper}>
      {/* <TopSlider /> */}
      <div className="mt-4">
        <BoutiqueSearch2 />
      </div>
      <BType />
      <div
        style={{
          position: 'relative',
          height: '100px',
        }}
      >
        <PaginationBlaunk />
      </div>
    </div>
  );
};
