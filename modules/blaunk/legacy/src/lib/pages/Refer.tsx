import { getStaticImageSrc } from '@li/design/icons';
import { referImage } from '@md/blaunk/config';
import Image from 'next/image';

export const Refer = () => {
  return (
    <div className="refer__container-wallet text-center">
      <div className="refer__wallet-img">
        <Image src={getStaticImageSrc(referImage)} style={{ objectFit: 'fill' }} width="550" height="400" alt="" />
      </div>
      <div className="refer__wallet-body">
        <form action="#">
          <div className="d-flex justify-content-between flex-wrap align-items-center refer__both">
            <p>
              Enter Refer Code <br />
              (Who referred you)
            </p>
            <p>
              <input
                style={{
                  padding: '3px',
                  textTransform: 'uppercase',
                  border: '1px solid grey',
                  backgroundColor: 'rgb(247, 247, 171)',
                }}
                type="text"
                maxLength={8}
                name="Phone"
                placeholder="Enter code"
              />
            </p>
          </div>
          <div className="mb-2" style={{ width: '70%', margin: 'auto', textAlign: 'right' }}>
            <button className="btn  refer__wallet-btn" style={{ color: 'white' }} type="submit">
              Go here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
