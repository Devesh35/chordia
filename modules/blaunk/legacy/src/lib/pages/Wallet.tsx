import { getStaticImageSrc } from '@li/design/icons';
import { walletImage } from '@md/blaunk/config';
import Image from 'next/image';

export const Wallet = () => {
  return (
    <div className="container-wallet">
      <div className="wallet-img">
        <Image
          src={getStaticImageSrc(walletImage)}
          style={{ objectFit: 'fill' }}
          width="550"
          height="400"
          alt="Wallet"
        />
      </div>
      <div style={{ textAlign: 'center' }} className="wallet-body">
        <p>
          <label>
            <h5> Amount Available</h5>
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h3>₹</h3>
          &nbsp;&nbsp;
          <input
            disabled
            name="No"
            value="300"
            style={{
              height: '30px',
              width: '80px',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '12px 12px',
              border: '1px solid grey',
            }}
          />
        </p>
      </div>
    </div>
  );
};
