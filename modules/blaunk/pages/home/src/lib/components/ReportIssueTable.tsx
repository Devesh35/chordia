import { DetailsTable } from './DetailsTable';
import styles from './report-issue-table.module.css';

export const ReportIssueTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Issues reported</div>
      <DetailsTable
        keyColWidth={200}
        data={[
          ['Number of complaints', '10'],
          ['Complaints resolved', '5'],
        ]}
      />
    </div>
  );
};
