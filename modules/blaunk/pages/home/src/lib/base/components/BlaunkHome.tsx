import { blaunkHome } from '@md/blaunk/config';
import Image from 'next/image';
import { getStaticImageSrc } from '@li/design/icons';

export const BlaunkHome = () => {
  return (
    <div style={{ objectFit: 'contain', display: 'flex', justifyContent: 'center' }}>
      <Image src={getStaticImageSrc(blaunkHome)} alt="blaunk-home" width={1250} height={250} />
    </div>
  );
};
