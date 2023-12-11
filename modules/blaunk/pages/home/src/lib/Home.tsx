import { TopSection } from './components/TopSection';
import { AdSection } from './components/AdSection';
import { Stack } from '@li/design/elements';
import { Placeholder } from './components/Placeholder';
import { FindVendors } from './components/FindVendors';
import { CustomerReviews } from './components/CustomerReviews';
import { CategorySearch } from './components/CategorySearch';
import { ExploreWorld } from './components/ExploreWorld';
import { MoreStores } from './components/MoreStores';
import { TrendyStars } from './components/TrendyStars';
import { StoreAds } from './components/StoreAds';

/* eslint-disable-next-line */
export type HomeProps = {};

export function Home(props: HomeProps) {
  return (
    <Stack direction="column" gap={24} pb={24}>
      <TopSection />
      <AdSection />
      <Placeholder height={200} />
      <Stack px={12} gap={12} justifyContent="space-between" wrap>
        <FindVendors />
        <CustomerReviews />
      </Stack>
      <AdSection size={300} />
      <CategorySearch />
      <ExploreWorld />
      <MoreStores />
      <TrendyStars />
      <StoreAds />
      <Placeholder height={200} />
    </Stack>
  );
}
