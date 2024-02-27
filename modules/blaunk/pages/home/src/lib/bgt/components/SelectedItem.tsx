import { Carousal, InputArea, Labeled, Rating } from '@li/design/elements';
import { TData } from './SearchTable';
import styles from './selected-item.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { QuantitySection } from './QuantitySection';
import { AddProductSpecifications } from '@md/blaunk/config';
import { transposeArray } from '@li/config/utils';
import tableStyles from './table.module.css';
import { assurance, getStaticImageSrc } from '@li/design/icons';
import { Placeholder } from '../../base/components/Placeholder';

type Props = {
  data: TData;
};

const PSTitles = AddProductSpecifications.options.form.map((p) => p.title);
const PSItems = transposeArray(
  AddProductSpecifications.options.form.map((p) => p.items),
);
console.log('PSItems', PSItems);

export const SelectedItem = ({ data }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['product-details']}>
        <div className={styles['product-image']}>
          <Carousal>
            {data.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                width={600}
                height={600}
                alt={data.name}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </Carousal>
        </div>
        <div className={styles['product-info']}>
          <div className={styles['product-info-left']}>
            <div
              className={clsx(
                'flex',
                'no-shrink',
                'justify-content-between',
                'align-items-center',
              )}
            >
              <div className={clsx('no-shrink')}>
                <Image
                  src={getStaticImageSrc(assurance)}
                  width={120}
                  height={40}
                  alt="BK Assurance"
                />
              </div>
              <div className={clsx('flex', 'no-shrink')}>
                <Rating rating={data.rating} />
                <span>{data.reviews}+ Reviews</span>
              </div>
            </div>
            <div className={styles.name}>{data.name}</div>
            <div className={styles['product-info-origin']}>
              <div>
                <label>Origin</label>
                <span>{data.origin}</span>
              </div>
              <div>
                <label>State</label>
                <span>{data.state}</span>
              </div>
              <div>
                <label>Type</label>
                <span>{data.type}</span>
              </div>
            </div>
            <Labeled label="Description">
              <InputArea placeholder="Max 250 characters" height={240} />
            </Labeled>
          </div>
          <div className={styles['product-info-right']}>
            <QuantitySection data={data.priceList} title="Order estimates" />
          </div>
        </div>
      </div>
      <Placeholder height={64} />
      <div className={styles['ps-wrapper']}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              {PSTitles.map((p, i) => (
                <>
                  <td colSpan={2} key={p}>
                    {p}
                  </td>
                  <th key={i}></th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {PSItems.map((p, i) => (
              <tr key={i}>
                {p.map((si) =>
                  si ? (
                    <>
                      <td key={si.label}>{si.label}</td>
                      <td key={si.placeholder}>{si.placeholder}</td>
                      <th key={si.id}></th>
                    </>
                  ) : (
                    <th colSpan={3}></th>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
