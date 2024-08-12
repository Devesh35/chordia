import { Carousal, Modal } from '@li/design/elements';
import { Whatsapp } from '@li/design/icons';
import { getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';
import { DetailsTable } from '../components';
import styles from './selected-item.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const images = getRandomImagesArray(6)(500).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={500}
    height={500}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const SelectedItem = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={'Dining set'}>
      <div className={styles.wrapper}>
        <div className={styles['carousal-wrapper']}>
          <Carousal pagination="bottom" enablePagination>
            {images}
          </Carousal>
        </div>
        <div className={styles['details-wrapper']}>
          <div>
            <div className={styles.name}>Dining set</div>
            <div className={styles.amount}>$300</div>
            <div className={styles.listing}>4 days ago</div>
          </div>
          <div className={styles.description}>
            This dining set is perfect for family meals and small gatherings.
            Its elegant design fits any home decor.
          </div>
          <DetailsTable
            data={[
              ['Area', 'Central park'],
              ['Country', 'India'],
              ['Condition', 'Good'],
              ['Negotiable', 'Yes'],
            ]}
          />
          <div className={styles['whatsapp-button']}>
            <Whatsapp />
            Chat on whatsapp
          </div>
        </div>
      </div>
    </Modal>
  );
};
