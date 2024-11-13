import { blaunkHome } from '@md/blaunk/config';
// import Image from 'next/image';
import { getStaticImageSrc } from '@li/design/icons';
import Image from 'next/image';

export const BlaunkHome = () => {
  return (
    <div style={{ objectFit: 'contain', display: 'flex', justifyContent: 'center' }}>
      <Image
        src={getStaticImageSrc(blaunkHome)}
        alt="blaunk-home"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
