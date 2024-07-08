import { SectionHeader } from '@md/blaunk/design';
import { Placeholder } from '../base/components/Placeholder';
import { DealsAndOffer } from '../components/DealsAndOffer';
import styles from './boutique.module.css';
import { Celeb } from './components/Celeb';
import { Jewellery } from './components/Jewellery';
import { Jewellery2 } from './components/Jewellery2';
import { JustDropped } from './components/JustDropped';
import { PickYourStyle } from './components/PickYourStyle';
import { StyleOnRent } from './components/StyleOnRent';
import { TopSlider } from './components/TopSlider';
import { TwoImages } from './components/TwoImages';

export const Boutique = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['top-offer']}>BUY 2 GET 1 LIMITED OFFER</div>
      <TopSlider />
      <JustDropped />
      <StyleOnRent />
      <SectionHeader />
      <Placeholder height={400} />
      <Celeb />
      <Placeholder height={400} />
      <PickYourStyle />
      <Jewellery />
      <Placeholder height={400} />
      <Jewellery2 />
      <Placeholder height={400} />
      <TwoImages />
      <DealsAndOffer />
    </div>
  );
};
