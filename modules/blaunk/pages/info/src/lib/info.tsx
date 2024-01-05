import styles from './info.module.css';

/* eslint-disable-next-line */
export interface InfoProps {}

export function Info(props: InfoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Info!</h1>
    </div>
  );
}

export default Info;
