import { withCondition } from '@li/design/enhancers';
import { Document } from '../profile.config';
import styles from './profile.module.css';
import clsx from 'clsx';
import { Input } from '@li/design/elements';

export const ProfileDocument = (props: Document & { isEdit: boolean }) => {
  return (
    <div className={clsx(styles.document)}>
      {withCondition(props.isEdit)(
        <Input type="file" className={styles['document-input']} />,
      )}
      <div className={styles['document-label']}>{props.label}</div>
      <div className={styles['document-content']}>
        {withCondition(props.isEdit)(
          <label className={styles['document-update']}>Click to update</label>,
        )}
        {props.placeholder?.map((p) => (
          <li>{p}</li>
        ))}
      </div>
    </div>
  );
};
