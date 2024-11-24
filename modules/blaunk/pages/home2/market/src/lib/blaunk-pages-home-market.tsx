import styles from './blaunk-pages-home-market.module.css';

/* eslint-disable-next-line */
export interface BlaunkPagesHomeMarketProps {}

export function BlaunkPagesHomeMarket(props: BlaunkPagesHomeMarketProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BlaunkPagesHomeMarket!</h1>
    </div>
  );
}

export default BlaunkPagesHomeMarket;
