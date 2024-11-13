import { Link } from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { getRandomImagesArray } from '@md/blaunk/config';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './wishlist.module.css';
// import { QuantitySelector } from '@li/design/components';

export type WishlistItemProps = {
  image: string;
  name: string;
  mrp: number;
  discount: number;
  total: number;
  link: string;
  onClear?: () => void;
};

export const dummyItems = getRandomImagesArray(10)(300, 300, 'clothes').map((s, i) => ({
  image: s,
  name: `Shirt ${i + 1}`,
  mrp: 500,
  discount: 10,
  total: 450,
  link: '',
}));

const WishlistItem: React.FC<WishlistItemProps> = ({ image, name, mrp, discount, total, link, onClear }) => {
  return (
    <div className={styles['wishlist-item']}>
      <Image src={image} alt={name} className={styles['wishlist-item__image']} />
      <div className={styles['wishlist-item__details']}>
        <div className={styles['wishlist-item__delete']}>
          <CircleClose color="var(--primary600)" />
        </div>
        <h3 className={styles['wishlist-item__name']}>{name}</h3>
        <p className={styles['wishlist-item__base']}>
          MRP: <span>${mrp}</span>
        </p>
        <p className={clsx(styles['wishlist-item__base'], styles['wishlist-item__discount'])}>
          Discount: <span>{discount}%</span>
        </p>
        <p className={styles['wishlist-item__base']}>
          Total: <span>${total}</span>
        </p>
        <Link href={link} className={styles['wishlist-item__link']} target="_blank" rel="noopener noreferrer">
          View Item
        </Link>
        {/* <QuantitySelector max={10} /> */}
        {/* <Button variant="secondary">Add to cart</Button> */}
      </div>
      {/* <button className={styles['wishlist-item__clear']} onClick={onClear}>
        Clear
      </button> */}
    </div>
  );
};

export default WishlistItem;
