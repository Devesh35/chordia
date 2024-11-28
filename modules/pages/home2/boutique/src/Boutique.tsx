/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useEffect, useState } from 'react';
// import { SectionHeader } from '@md/blaunk/design';
import { PlaceholderImage } from '../../../../blaunk/pages/home/src/lib/base/components/PlaceholderImage';
import { DealsAndOffer } from '../../store/src/components/DealsAndOffer';
import styles from './boutique.module.css';
import { IndianCeleb } from './components/IndianCeleb';
import { InternationalCeleb } from './components/InternationalCeleb';
import { MenCollection } from './components/MenCollection';
import { StyleOnRent } from './components/StyleOnRent';
import { TopSlider } from './components/TopSlider';
import { WomenCollection } from './components/WomenCollection';

export const Boutique = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isTab, setIsTab] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleResizeTab = () => {
      setIsTab(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResizeTab);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles['top-offer']}>BUY 2 GET 1 LIMITED OFFER</div>
      <TopSlider />
      {/* <div className="mt-4">
        <BoutiqueSearch />
      </div> */}
      <WomenCollection />
      <MenCollection />
      <PlaceholderImage height={400} />
      <IndianCeleb />
      <InternationalCeleb />
      <PlaceholderImage height={400} />
      <StyleOnRent />
      {/* <SectionHeader /> */}
      {/* <Jewellery />
      <Placeholder height={400} />
      <Jewellery2 />
      <Placeholder height={400} />
      <TwoImages /> */}
      {/* <BannerSection size={302} /> */}
      <DealsAndOffer />
    </div>
  );
};
