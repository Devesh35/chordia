import { getStaticImageSrc } from '@li/design/icons';
import { blaunkHome } from '@md/blaunk/config';

export const BlaunkHome = () => {
  return (
    <div style={{ objectFit: 'contain', display: 'flex', justifyContent: 'center' }}>
      <img
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
