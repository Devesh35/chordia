import { getStaticImageSrc } from '@li/design/icons';
import { blaunkStore } from '@md/blaunk/config';
import Image from 'next/image';
// import styles from './deal-section.module.css';

export const DealSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image src={getStaticImageSrc(blaunkStore)} alt="blaunk_store" width={1250} height={250} />
    </div>
  );
};
