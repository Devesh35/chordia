import clsx from 'clsx';
import styles from './divider.module.css';

type OrientationType = 'horizontal' | 'vertical';

type Props = {
  thickness?: number;
  color?: string;
  orientation?: OrientationType;
};

export const Divider = ({
  thickness = 1,
  color = 'Divider',
  orientation = 'horizontal',
}: Props) => {
  return (
    <div
      className={clsx(styles.divider, {
        [styles.horizontal]: orientation === 'horizontal',
        [styles.vertical]: orientation === 'vertical',
      })}
      style={{
        backgroundColor: color,
        ...(orientation === 'horizontal'
          ? { height: thickness }
          : { width: thickness }),
      }}
    />
  );
};
