import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';

import { ImageCard } from '@li/design/components';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './deals-and-offer.module.css';

const recentViews = getRandomImagesArray(8)(600, 600, 'hotels').map((src) => (
  <ImageCard
    className={styles['recent-card']}
    key={src}
    image={{
      src: src,
      width: 300,
      height: 300,
      alt: 'random',
    }}
    details={
      <div
        className={clsx(
          'flex-column',
          'align-items-center',
          styles['recent-card-details'],
        )}
      >
        <div className={styles.name}>Hotel name</div>
        <div className={styles.price}>Marine Drive</div>
        <div className={styles.price}>Mumbai</div>
      </div>
    }
  />
));

const ads = getRandomImagesArray(10)(300, 300, 'hotels').map((src, i) => (
  <Image key={i} src={src} width={300} height={300} alt={'random'} />
));

const adsLarge = getRandomImagesArray(10)(400, 800, 'hotels').map((src, i) => (
  <Image key={i} src={src} width={800} height={400} alt={'random'} />
));

export const DealsAndOffer = () => {
  return (
    <>
      <div className={clsx(styles['add-on-header'])}>Recently viewed</div>
      <ScrollableSnap className={styles['add-on']} controls>
        {recentViews}
      </ScrollableSnap>
      <div className={clsx(styles['deals-offer'])}>Deals & Offer</div>
      <ScrollableSnap className={styles['add-on']} controls>
        {ads}
      </ScrollableSnap>
      <ScrollableSnap className={styles['add-on']} controls>
        {ads}
      </ScrollableSnap>
      <div className={clsx(styles['deals-offer'], styles['new-destinations'])}>
        Explore new
      </div>
      <ScrollableSnap className={styles['add-on']} controls>
        {adsLarge}
      </ScrollableSnap>
      <ScrollableSnap className={styles['add-on']} controls>
        {adsLarge}
      </ScrollableSnap>
    </>
  );
};
