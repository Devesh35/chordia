import styles from './common.module.css';

export const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <h4>Disclaimer</h4>
      <p>
        We agree with Terms & Condition of B2B Blaunk Trade. Free Returns and
        Refund if Buyer not satisfied with goods received vary or different from
        product image.
      </p>

      <p>
        Blaunk will not be held liable for any legal or claiming, as this is
        only Online platform for secure trade between two vendors.
      </p>

      <p>
        This post will be valid for 4 months and get auto deleted. Return Policy
        is only valid if vendor failed to supply promised articles.
      </p>
    </div>
  );
};
