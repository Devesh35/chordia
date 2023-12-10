import styles from './blaunk-config.module.css';

/* eslint-disable-next-line */
export interface BlaunkConfigProps {}

export function BlaunkConfig(props: BlaunkConfigProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BlaunkConfig!</h1>
    </div>
  );
}

export default BlaunkConfig;
