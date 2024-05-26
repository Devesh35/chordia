import { ClassName } from '@li/types/shared';
import clsx from 'clsx';
import styles from './details-table.module.css';

type Props = {
  data: [string, React.ReactNode][];
  keyColWidth?: number;
} & Partial<ClassName>;

export const DetailsTable = ({ data, keyColWidth = 160, className }: Props) => {
  return (
    <table className={clsx(styles.table, className)}>
      <tbody>
        {data.map(([key, value]) => (
          <tr key={key}>
            <td width={keyColWidth}>{key}</td>
            <td width={4}>:</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
