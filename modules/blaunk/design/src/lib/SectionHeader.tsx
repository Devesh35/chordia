import { Divider } from '@li/design/elements';
import styles from './section-header.module.css';

export const SectionHeader = ({ sectionName }: { sectionName: string }) => (
  <div className={styles.wrapper}>
    <Divider color={`var(--primary)`} thickness={4} />  
    {sectionName}
    <Divider color={`var(--primary)`} thickness={4} />  
  </div>
);
