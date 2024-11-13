import { grid } from '@li/config/design';
import { getStaticImageSrc } from '@li/design/icons';
import { blaunkHome } from '@md/blaunk/config';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import clsx from 'clsx';
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

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <TopSection />
      <RollingAd size={150} />
      <BlaunkHome />
      <div className={clsx(styles.section, grid.grid)}>
        <FindVendors backgroundImage="url('https://img.freepik.com/premium-photo/logistic-network-distribution-background-logistic-transport-concept_250469-9178.jpg')" />
        <HomeYtbRedirect />
        <CustomerReviews />
      </div>
      <BannerSection size={301} />
      <HomeBanners />
      <CategorySearch />
      <ExploreWorld />
      <MoreStores />
      <TrendyStars />
      <StoreAds />
      <Image src={getStaticImageSrc(blaunkHome)} alt="blaunk_home" />
      <MetricCard b2bClients={400} customers={26} countries={29} productsServices={825} />{' '}
    </div>
  );
};
