import { Button } from '@li/design/elements';
import { Country } from '@li/types/config';
import styles from './country-card.module.css';
import clsx from 'clsx';

type Props = {
  country: Country;
};

export const CountryCard = ({ country }: Props) => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.flag, styles['flag-wrapper'])}>
        {country.Flag}
      </div>
      <div className={styles.content}>
        <div className={styles['country-name']}>{country.name}</div>
        <Button
          className={styles.button}
          style={{
            backgroundColor: country.color,
            color: country.colorOnColor,
          }}
        >
          Source
        </Button>
      </div>
    </div>
  );
};
