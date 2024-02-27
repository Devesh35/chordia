import { FormConfigProvider, FormSection } from '@li/design/elements';
import { TourProductDetails } from '@md/blaunk/config';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';
import { RoomsSection } from './RoomsSection';
import styles from './common.module.css';
import { Amenities } from './Amenities';

export type RoomType = {
  id: string;
  roomType?: string;
  mrp?: number;
  pos?: number;
};

export type VoucherType = {
  id: string;
  voucherType?: string;
  value?: number;
  discount?: number;
};

export const Tour = () => {
  return (
    <FormConfigProvider isEdit hasBG>
      <FormSection section={TourProductDetails} selected="tour-details" />
      <FormSection section={TourProductDetails} selected="tour-desc" />
      <div className={styles.flex}>
        <div className={styles.half}>
          <RoomsSection data={[]} />
        </div>
        <div className={styles.half}>
          <RoomsSection data={[]} />
        </div>
      </div>
      <Amenities />

      <FormSection section={TourProductDetails} selected="tour-image" />

      <Disclaimer />
      <FormAction />
    </FormConfigProvider>
  );
};
