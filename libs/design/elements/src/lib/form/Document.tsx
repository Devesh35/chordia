import { withCondition } from '@li/design/enhancers';
import styles from './document.module.css';
import clsx from 'clsx';
import { Input } from './Input';
import { FormDocument } from '@li/types/design';

export const Document = (props: FormDocument & { isEdit: boolean }) => {
  return (
    <div
      className={clsx(styles.document, { [styles.required]: props.required })}
    >
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
