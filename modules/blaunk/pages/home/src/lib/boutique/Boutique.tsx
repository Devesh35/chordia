import { SectionHeader } from '@md/blaunk/design';
import { Placeholder } from '../base/components/Placeholder';
import { DealsAndOffer } from '../components/DealsAndOffer';
import styles from './boutique.module.css';
import { IndianCeleb } from './components/IndianCeleb';
import { InternationalCeleb } from './components/InternationalCeleb';
import { JustDropped } from './components/JustDropped';
import { PickYourStyle } from './components/PickYourStyle';
import { StyleOnRent } from './components/StyleOnRent';
import { TopSlider } from './components/TopSlider';

export const Boutique = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['top-offer']}>BUY 2 GET 1 LIMITED OFFER</div>
      <TopSlider />
      <JustDropped />
      <StyleOnRent />
      <SectionHeader />
      <Placeholder height={400} />
      <IndianCeleb />
      <InternationalCeleb />
      <Placeholder height={400} />
      <PickYourStyle />
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
