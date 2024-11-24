import { getStaticImageSrc } from '@li/design/icons';
import { blaunkStore } from '@md/blaunk/config';

export const DealSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={getStaticImageSrc(blaunkStore)}
        alt="blaunk_store"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
