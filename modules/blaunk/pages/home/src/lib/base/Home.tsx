import { grid } from '@li/config/design';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import clsx from 'clsx';
import { BannerSection } from './components/BannerSection';
import { BlaunkHome } from './components/BlaunkHome';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { FindVendors } from './components/FindVendors';
import { HomeYtbRedirect } from './components/HomeYtbRedirect';
import { MoreStores } from './components/MoreStores';
// import { Placeholder } from './components/Placeholder';
import { getStaticImageSrc } from '@li/design/icons';
import { blaunkHome } from '@md/blaunk/config';
import { HomeBanners } from './components/HomeBanners';
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
        <FindVendors />
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
      {/* <Placeholder height={200}/> */}
      <img src={getStaticImageSrc(blaunkHome)} alt="blaunk_home" />
    </div>
  );
};
