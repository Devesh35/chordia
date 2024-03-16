import clsx from 'clsx';
import styles from './tariff.module.css';
import { Button, Input } from '@li/design/elements';

export const Tariff = () => {
  return (
    <>
      <p className={styles['aside-title']}>Tariff Details (Rs)</p>
      <div className={clsx(styles['aside-table'])}>
        <p>Charges</p>
        <span> 8600</span>
      </div>
      <div className={clsx(styles['aside-table'])}>
        <p>Discounts</p>
        <span> 2200</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>SubTotal</p>
        <span> 8600</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>QTY No.</p>
        <span>1</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Voucher</p>
        <span className={styles['voucher-input']}>
          <Input />
          Off 50
        </span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Total</p>
        <span>300</span>
      </div>

      <div className={clsx(styles['aside-table'])}>
        <p>Service Charge</p>
        <span>0</span>
      </div>

      <div className={clsx(styles['aside-table'], styles['aside-table-main'])}>
        <p>To Pay (CoD)</p>
        <span className="h5">300</span>
      </div>

      <Button className={styles['aside-table-action']}>Book Now</Button>
    </>
  );
};
