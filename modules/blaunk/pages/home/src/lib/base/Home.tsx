import { grid } from '@li/config/design';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import clsx from 'clsx';
import { BannerSection } from './components/BannerSection';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { FindVendors } from './components/FindVendors';
import { HomeYtbRedirect } from './components/HomeYtbRedirect';
import { MoreStores } from './components/MoreStores';
import { BlaunkHome } from './components/BlaunkHome';
import { StoreAds } from './components/StoreAds';
import { TopSection } from './components/TopSection';
import { TrendyStars } from './components/TrendyStars';
import styles from './home.module.css';
import { HomeBanners } from './components/HomeBanners';
import { blaunkHome } from '@md/blaunk/config';
import { getStaticImageSrc } from '@li/design/icons';
import MetricCard from './components/MetricCard';

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
      <img src={getStaticImageSrc(blaunkHome)} alt="blaunk_home" />
      <MetricCard b2bClients={400} customers={26} countries={29} productsServices={825} />{' '}
    </div>
  );
};
