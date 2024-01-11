import styles from './page-header.module.css';

type Props = {
  title: React.ReactNode;
  aside?: React.ReactNode;
};

export const PageHeader = ({ title, aside }: Props) => {
  return (
    <header className={styles.header}>
      {title}
      {aside}
    </header>
  );
};
