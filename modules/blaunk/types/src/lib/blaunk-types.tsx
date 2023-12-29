import styles from './blaunk-types.module.css';

/* eslint-disable-next-line */
export interface BlaunkTypesProps {}

export function BlaunkTypes(props: BlaunkTypesProps) {
  return (
    <div className={styles['container']}>
      <h1>BlaunkTypes!</h1>
    </div>
  );
}

export default BlaunkTypes;
