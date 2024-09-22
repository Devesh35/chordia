'use client';
import { blaunkMarketPlace } from '@md/blaunk/config';
import Image from 'next/image';

export const HomeBanners = () => {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    width: '100%',
  };

  const bannerStyle = {
    flex: 1,
    borderRadius: '10px', 
    overflow: 'hidden', 
    margin: '0 10px', 
  };

  return (
    <div style={wrapperStyle}>
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
