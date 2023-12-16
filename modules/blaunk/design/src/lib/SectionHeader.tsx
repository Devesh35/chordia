import { Divider } from '@li/design/elements';
import styles from './section-header.module.css';

type Props = {
  sectionName: string;
  basic?: true;
};
export const SectionHeader = ({ sectionName, basic }: Props) => (
  <div className={styles.wrapper} style={basic ? { width: '100%' } : {}}>
    {basic || <Divider color={`var(--primary)`} thickness={4} />}
    {sectionName}
    {basic || <Divider color={`var(--primary)`} thickness={4} />}
  </div>
);
