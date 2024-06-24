import { grid } from '@li/config/design';
import { Excel } from '@li/design/components';
import { CustomerReviews, RollingAd } from '@md/blaunk/design';
import clsx from 'clsx';
import { BannerSection } from './components/BannerSection';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { FindVendors } from './components/FindVendors';
import { MoreStores } from './components/MoreStores';
import { Placeholder } from './components/Placeholder';
import { StoreAds } from './components/StoreAds';
import { TopSection } from './components/TopSection';
import { TrendyStars } from './components/TrendyStars';
import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <TopSection />
      <RollingAd size={150} />
      <Placeholder height={200} />
      <div className={clsx(styles.section, grid.grid)}>
        <FindVendors />
        <CustomerReviews />
      </div>
      <BannerSection size={301} />
      <CategorySearch />
      <ExploreWorld />
      <MoreStores />
      <TrendyStars />
      <StoreAds />
      <Placeholder height={200} />
      <Excel />
      <Placeholder height={200} />
    </div>
  );
};
