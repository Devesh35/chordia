import { getRandomImagesArray } from '@md/blaunk/config';
import { Carousal } from '@li/design/elements';
import Image from 'next/image';

const img = getRandomImagesArray(3)(600, 1920).map((src) => (
  <Image key={src} src={src} width={1914} height={600} alt="tour" />
));

export const StoreAds = () => {
  return <Carousal autoInterval={5000}>{img}</Carousal>;
};
