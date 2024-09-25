import { getStaticImageSrc } from '@li/design/icons';
import { contestBackImage, contestImage } from '@md/blaunk/config';
import Image from 'next/image';

export const Contest = () => {
  return (
    <div
      className="container contest-container"
      style={{
        backgroundImage: `url(${getStaticImageSrc(contestBackImage)})`,
      }}
    >
      <div>
        <Image className="img-fluid" src={getStaticImageSrc(contestImage)} width="1200" height="600" alt="Contest" />
      </div>
      <form className="mt-2">
        <p style={{ color: 'white', fontSize: '22px', fontWeight: '550' }}>
          Who is president of India ?
          <select className="ml-4">
            <option>Rakesh</option>
            <option>Vipin</option>
            <option>Pravin</option>
            <option>Raj</option>
          </select>
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
