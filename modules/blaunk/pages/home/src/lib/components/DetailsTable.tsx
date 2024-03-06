import styles from './details-table.module.css';

type Props = {
  data: [string, React.ReactNode][];
  keyColWidth?: number;
};

export const DetailsTable = ({ data, keyColWidth = 160 }: Props) => {
  return (
    <table className={styles.table}>
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
