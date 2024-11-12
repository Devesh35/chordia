import Image from 'next/image';
import styles from './profile.module.css';
// import clsx from 'clsx';

interface ProfileProps {
  image: string;
  name: string;
  phone: string;
  // wallet: number;
  img: string;
}

export const Profile = ({ image, name, phone, img }: ProfileProps) => {
  // const walletStatus =
  //   wallet > 0 ? 'positive' : wallet === 0 ? 'neutral' : 'negative';

  return (
    <div className={styles.profile}>
      <Image src={image} alt="Profile" width={64} height={64} className={styles['profile-image']} />
      <div className={styles.bio}>
        <div className={styles.row}>
          <span className={styles['profile-name']}>{name}</span>
          <Image
            src={img} // Display the image passed as the `img` prop
            alt="Wallet Icon"
            width={25}
            height={20}
          />
        </div>
        <p className={styles['profile-phone']}>{phone}</p>
      </div>
    </div>
  );
};
