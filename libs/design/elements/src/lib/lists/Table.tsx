import React from 'react';

type TableColumn = { id: string; name: string };
type TableData = Record<string, React.ReactNode>[];

interface TableProps {
  data: TableData;
  columns: TableColumn[];
  onRowClick?: (row: TableData[number]) => void;
  onCellClick?: (row: TableData[number], columnKey: string) => void;
}

export const Table: React.FC<TableProps> = ({
  data,
  columns,
  onRowClick,
  onCellClick,
}) => (
  <table>
    <thead>
      <tr>
        {columns.map(({ id, name }) => (
          <th key={id}>{name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} onClick={() => onRowClick?.(row)}>
          {columns.map(({ id: key }) => (
            <td key={key} onClick={() => onCellClick?.(row, key)}>
              {row[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
