import { Carousal } from '@li/design/elements';
import Image from 'next/image';
import styles from './selected-item.module.css';

type Props = {
  data: string[];
  name: string;
};

export const ProductImage = ({ data, name }: Props) => {
  return (
    <div className={styles['product-image']}>
      <Carousal>
        {data.map((src, i) => (
          <Image key={src} src={src} width={600} height={600} alt={name} loading={i === 0 ? 'eager' : 'lazy'} />
        ))}
      </Carousal>
    </div>
  );
};
