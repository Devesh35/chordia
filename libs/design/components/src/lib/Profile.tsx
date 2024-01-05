import Image from 'next/image';
import styles from './profile.module.css';
import clsx from 'clsx';

interface ProfileProps {
  image: string;
  name: string;
  phone: string;
  wallet: number;
}

export const Profile = ({ image, name, phone, wallet }: ProfileProps) => {
  const walletStatus =
    wallet > 0 ? 'positive' : wallet === 0 ? 'neutral' : 'negative';

  return (
    <div className={styles.profile}>
      <Image
        src={image}
        alt="Profile"
        width={64}
        height={64}
        className={styles['profile-image']}
      />
      <div className={styles.bio}>
        <div className={styles.row}>
          <span className={styles['profile-name']}>{name}</span>
          <span
            className={clsx(
              styles['profile-wallet'],
              styles[`profile-wallet-${walletStatus}`],
            )}
          >
            ${wallet}
          </span>
        </div>
        <p className={styles['profile-phone']}>{phone}</p>
      </div>
    </div>
  );
};
