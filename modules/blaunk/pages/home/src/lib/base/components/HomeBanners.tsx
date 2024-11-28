'use client';
import { useMedia } from '@li/design/hooks';
import { blaunkMarketPlace } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './find-vendors.module.css';

export const HomeBanners = () => {
  const { isMobile } = useMedia();

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '12px',
  };

  const bannerStyle = {
    flex: 1,
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '0 10px',
  };

  return (
    <div style={{ ...wrapperStyle, }} classname={styles.banner}>
      <div style={bannerStyle}>
        <Image
          width={650}
          height={200}
          alt="homeBanner"
          src={blaunkMarketPlace}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <div style={bannerStyle}>
        <Image
          width={650}
          height={200}
          alt="homeBanner"
          src={blaunkMarketPlace}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
