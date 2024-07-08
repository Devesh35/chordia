import { InputArea, Labeled } from '@li/design/elements';
import styles from './selected-item.module.css';

export const ProductDescription = () => {
  return (
    <div className={styles.description}>
      <Labeled label="Description">
        <InputArea placeholder="Max 250 characters" height={400} />
      </Labeled>
    </div>
  );
};
