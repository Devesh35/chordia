import clsx from 'clsx';
import styles from './tariff.module.css';
import { Button, Input } from '@li/design/elements';

export const Tariff = () => {
  return (
    <>
      <p className={styles['aside-title']}>Tariff Details</p>
      <div className={clsx(styles['aside-table'])}>
        <p>Charges</p>
        <span>Rs. 8600</span>
      </div>
      <div className={clsx(styles['aside-table'])}>
        <p>Discounts</p>
        <span>Rs. 2200</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>SubTotal</p>
        <span>Rs. 8600</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>QTY No.</p>
        <span>1</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Voucher</p>
        <span>
          <Input />
        </span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Total</p>
        <span>Rs.300</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Service Charge</p>
        <span>Rs.0</span>
      </div>

      <div className={clsx(styles['aside-table'], styles['aside-table-main'])}>
        <p>To Pay</p>
        <span className="h5">Rs.300</span>
      </div>

      <Button className={styles['aside-table-action']}>Book Now</Button>
    </>
  );
};
