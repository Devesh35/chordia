import { Divider } from '@li/design/elements';
import clsx from 'clsx';
import styles from './section-header.module.css';

type Props = {
  sectionName?: string;
  basic?: true;
};
export const SectionHeader = ({ sectionName, basic }: Props) => {
  return (
    <div className={clsx(styles.wrapper, { [styles['no-gap']]: !sectionName })} style={basic ? { width: '100%' } : {}}>
      {basic || <Divider color={`var(--primary)`} thickness={4} />}
      {sectionName}
      {basic || <Divider color={`var(--primary)`} thickness={4} />}
    </div>
  );
};
