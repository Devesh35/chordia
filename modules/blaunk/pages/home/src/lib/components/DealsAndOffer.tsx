import { ScrollableSnap } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';

// import { ImageCard } from '@li/design/components';
// import clsx from 'clsx';
import { useMedia } from '@li/design/hooks';
import { SectionHeader } from '@md/blaunk/design';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './deals-and-offer.module.css';

// const recentViews = getRandomImagesArray(8)(600, 600, 'hotels').map((src) => (
//   <ImageCard
//     className={styles['recent-card']}
//     key={src}
//     image={{
//       src: src,
//       width: 300,
//       height: 300,
//       alt: 'random',
//     }}
//     details={
//       <div
//         className={clsx(
//           'flex-column',
//           'align-items-center',
//           styles['recent-card-details'],
//         )}
//       >
//         <div className={styles.name}>Hotel name</div>
//         <div className={styles.price}>Marine Drive</div>
//         <div className={styles.price}>Mumbai</div>
//       </div>
//     }
//   />
// ));

const ads = (isMobile: boolean) =>
  getRandomImagesArray(10)(isMobile ? 170 : 300, isMobile ? 170 : 300, 'hotels').map((src, i) => (
    <Image key={i} src={src} width={isMobile ? 170 : 300} height={isMobile ? 170 : 300} alt={'random'} />
  ));
const adsMobile = (isMobile: boolean) =>
  getRandomImagesArray(10)(isMobile ? 170 : 300, isMobile ? 170 : 300, 'hotels').map((src, i) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Image key={i} src={src} width={isMobile ? 170 : 300} height={isMobile ? 170 : 300} alt={'random'} />
      <Image key={i} src={src} width={isMobile ? 170 : 300} height={isMobile ? 170 : 300} alt={'random'} />
    </div>
  ));

const adsLarge = (isMobile: boolean) =>
  getRandomImagesArray(10)(isMobile ? 180 : 400, isMobile ? 350 : 800, 'hotels').map((src, i) => (
    <Image key={i} src={src} width={isMobile ? 350 : 800} height={isMobile ? 180 : 400} alt={'random'} />
  ));

export const DealsAndOffer = ({ showRecent }: { showRecent?: boolean }) => {
  const isMobile = useMedia();
  return (
    <>
      {/* {showRecent && (
        <>
          <div className={clsx(styles['add-on-header'])}>Recently viewed</div>
          <ScrollableSnap className={styles['add-on']} controls>
            {recentViews}
          </ScrollableSnap>
        </>
      )} */}
      <SectionHeader sectionName="Deals & Offer" />
      {isMobile ? (
        <ScrollableSnap className={styles['add-on']} controls delta={300}>
          {adsMobile(isMobile)}
        </ScrollableSnap>
      ) : (
        <>
          <ScrollableSnap className={styles['add-on']} controls>
            {ads(isMobile)}
          </ScrollableSnap>
          <ScrollableSnap className={styles['add-on']} controls>
            {ads(isMobile)}
          </ScrollableSnap>
        </>
      )}
      <SectionHeader sectionName="Explore New" />
      <ScrollableSnap className={styles['add-on']} controls>
        {adsLarge(isMobile)}
      </ScrollableSnap>
      <ScrollableSnap className={clsx(styles['add-on'], styles.bottom)} controls>
        {adsLarge(isMobile)}
      </ScrollableSnap>
    </>
  );
};
