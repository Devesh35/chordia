'use client';

import styles from './table.module.css';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TData = { [K in string]: any };

export type TableColumn<T extends TData> = {
  id: keyof T;
  name: string;
  cellFormat?: () => React.ReactNode;
};

type TableProps<T extends TData> = {
  className?: string;
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (row: T) => void;
  onCellClick?: (row: T, columnKey: keyof T) => void;
};

export const Table = <T extends TData>({
  data,
  columns,
  className,
  onRowClick,
  onCellClick,
}: TableProps<T>) => (
  <table className={clsx(styles.table, className)}>
    <thead className={styles.thead}>
      <tr>
        {columns.map(({ id, name }: TableColumn<T>) => (
          <th className={styles.th} key={id as string}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={styles.tr}
          style={onRowClick ? { cursor: 'pointer' } : {}}
          onClick={() => onRowClick?.(row)}
        >
          {columns.map(({ id }) => (
            <td
              key={id as string}
              className={styles.td}
              style={onCellClick ? { cursor: 'pointer' } : {}}
              onClick={() => onCellClick?.(row, id)}
            >
              {row[id]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
