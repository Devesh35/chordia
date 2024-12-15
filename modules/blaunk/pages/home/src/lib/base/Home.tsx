'use client';

import { Carousal } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { getStaticImageSrc } from '@li/design/icons';
import { blaunkHome, Constants, getRandomImagesArray } from '@md/blaunk/config';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import Image from 'next/image';
import { BannerSection } from './components/BannerSection';
import { BlaunkHome } from './components/BlaunkHome';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { FindVendors } from './components/FindVendors';
import { HomeBanners } from './components/HomeBanners';
import { HomeYtbRedirect } from './components/HomeYtbRedirect';
import MetricCard from './components/MetricCard';
import { MoreStores } from './components/MoreStores';
import { StoreAds } from './components/StoreAds';
import { TopSection } from './components/TopSection';
import { TrendyStars } from './components/TrendyStars';
import styles from './home.module.css';

const images = (isMobile: boolean) =>
  getRandomImagesArray(6)(Constants.homeBannerImageSizeMax, 1920).map((src, i) => (
    <Image
      key={src}
      src={src}
      width={isMobile ? 440 : 1920}
      height={isMobile ? 240 : Constants.homeBannerImageSizeMax}
      alt="random"
      loading={i === 0 ? 'eager' : 'lazy'}
    />
  ));
export const Home = () => {
  const isMobile = useMedia('mobile');

  return (
    <div className={styles.wrapper}>
      <TopSection />
      <RollingAd size={isMobile ? 75 : 150} />
      <BlaunkHome />
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px' }}>
        <FindVendors backgroundImage="url('https://img.freepik.com/premium-photo/logistic-network-distribution-background-logistic-transport-concept_250469-9178.jpg')" />
        <HomeYtbRedirect />
      </div>
      <CustomerReviews />
      {isMobile ? (
        <div className={styles['carousal-wrapper']}>
          <Carousal autoInterval={5000} hidePagination>
            {images(isMobile)}
          </Carousal>
        </div>
      ) : (
        <BannerSection size={301} />
      )}
      <HomeBanners />
      <CategorySearch />
      <ExploreWorld />
      <MoreStores />
      <TrendyStars />
      <StoreAds />
      <img src={getStaticImageSrc(blaunkHome)} alt="blaunk_home" />
      <MetricCard b2bClients={400} customers={26} countries={29} productsServices={825} />{' '}
    </div>
  );
};
