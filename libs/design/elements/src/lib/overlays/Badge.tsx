import styles from './badge.module.css';

export type BadgeProps = {
  width?: number;
  content?: React.ReactNode;
  children: React.ReactNode;
};

export const Badge = ({ children, content, width = 12 }: BadgeProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      {content && (
        <div
          className={styles.content}
          style={{ width: `${width}px`, height: `${width}px` }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
