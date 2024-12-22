import { Divider } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import clsx from 'clsx';
import styles from './section-header.module.css';

type Props = {
  sectionName?: string;
  basic?: true;
  className?: string;
};
export const SectionHeader = ({ sectionName, basic, className }: Props) => {
  const isMobile = useMedia();
  return (
    <div
      className={clsx(styles.wrapper, { [styles['no-gap']]: !sectionName }, className)}
      style={basic ? { width: '100%' } : isMobile ? { width: '96%' } : {}}
    >
      {basic || <Divider color={`var(--primary)`} thickness={isMobile ? 2 : 4} />}
      {sectionName}
      {basic || <Divider color={`var(--primary)`} thickness={isMobile ? 2 : 4} />}
    </div>
  );
};
