import { TopSection } from './components/TopSection';
import { Placeholder } from './components/Placeholder';
import { FindVendors } from './components/FindVendors';
import { CustomerReviews } from './components/CustomerReviews';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { MoreStores } from './components/MoreStores';
import { TrendyStars } from './components/TrendyStars';
import { StoreAds } from './components/StoreAds';
import { AdSection } from '@md/blaunk/design';
import styles from './home.module.css';
import { BannerSection } from './components/BannerSection';

/* eslint-disable-next-line */
export type HomeProps = {};

export function Home(props: HomeProps) {
  return (
    <div className={styles.wrapper}>
      <TopSection />
      <AdSection size={150} />
      <Placeholder height={200} />
      <div className={styles.section}>
        <FindVendors />
        <CustomerReviews />
      </div>
      <BannerSection size={300} />
      <CategorySearch />
      <ExploreWorld />
      <MoreStores />
      <TrendyStars />
      <StoreAds />
      <Placeholder height={200} />
    </div>
  );
}
