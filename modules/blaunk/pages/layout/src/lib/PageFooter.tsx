import { gs } from '@li/config/design';
import { Link } from '@li/design/elements';
import { Facebook, Gmail, Instagram, LinkedIn } from '@li/design/icons';
import { FooterDetails } from '@md/blaunk/config';
import styles from './page-footer.module.css';

export const PageFooter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        {FooterDetails.map((details) => (
          <div id={details.title} key={details.title}>
            <div className={styles.title}>{details.title}</div>
            {details.items.map((item) => (
              <Link prefetch className={styles.label} key={item.label} href={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Gmail />
        </div>
        <div className={styles.icon}>
          <LinkedIn />
        </div>
        <div className={styles.icon}>
          <Facebook />
        </div>
        <div className={styles.icon}>
          <Instagram />
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={gs.clickable}>© 2021 Copyright</div>
        <div className={gs.clickable}>Blaunk.com</div>
      </div>
    </div>
  );
};
