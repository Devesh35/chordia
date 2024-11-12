import { Rating } from '@li/design/elements';
import { PDF } from '@li/design/icons';
import Image from 'next/image';
import { OrderItemType } from '../Order';
import styles from './order-item.module.css';

type Props = {
  item: OrderItemType;
};

export const OrderItem = ({ item }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['image-wrapper']}>
        <Image src={item.image} alt="product" width={80} height={80} />
        <div>{item.name}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Date</div>
        <div className={styles['data-wrapper-value']}>{item.date}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Order</div>
        <div className={styles['data-wrapper-value']}>
          <PDF />
        </div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Order</div>
        <div className={styles['data-wrapper-value']}>{item.orderStatus}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>QR Code</div>
        <div className={styles['data-wrapper-value']}>{item.qrCode}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>OTP</div>
        <div className={styles['data-wrapper-value']}>{item.otp}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Product rating</div>
        <div className={styles['data-wrapper-value']}>
          <Rating rating={item.rating} />
        </div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Review</div>
        <div className={styles['data-wrapper-value']}>{item.review}</div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>payment</div>
        <div className={styles['data-wrapper-value']}>
          {item.payment.toUpperCase()}
        </div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>status</div>
        <div className={styles['data-wrapper-value']}>
          {item.status.toUpperCase()}
        </div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Date</div>
        <div className={styles['data-wrapper-value']}>
          {item.dateTime.toLocaleString()}
        </div>
      </div>
      <div className={styles['data-wrapper']}>
        <div className={styles['data-wrapper-label']}>Verify OTP</div>
        <div className={styles['data-wrapper-value']}>
          {item.verifyOtp}
        </div>
      </div>
    </div>
  );
};
