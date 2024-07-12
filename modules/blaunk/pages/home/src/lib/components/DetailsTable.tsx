import { ClassName } from '@li/types/shared';
import clsx from 'clsx';
import styles from './details-table.module.css';

type Props = {
  data: [string, React.ReactNode][];
  keyColWidth?: number;
  noSemiColon?: boolean;
} & Partial<ClassName>;

export const DetailsTable = ({
  data,
  keyColWidth = 160,
  noSemiColon,
  className,
}: Props) => {
  return (
    <table className={clsx(styles.table, className)}>
      <tbody>
        {data.map(([key, value]) => (
          <tr key={key}>
            <td width={keyColWidth}>{key}</td>
            {noSemiColon ? null : <td width={4}>:</td>}
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
