import { Checkbox } from '@li/design/elements';
import { AmenitiesItems } from '@md/blaunk/config';
import styles from './amenities.module.css';
import clsx from 'clsx';
import { transposeArray } from '@li/config/utils';

const distanceIndex = 2;
const tableRows = transposeArray(AmenitiesItems.map((i) => i.items));

export const Amenities = () => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {AmenitiesItems.map((item) => (
              <th key={item.title} style={{ backgroundColor: item.color }}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item) => (
            <tr>
              {item.map((i, index) => (
                <td key={`${i}-${index}`}>
                  {index === distanceIndex ? (
                    <div className={clsx('flex', 'justify-content-between')}>
                      <Checkbox label={i} readonly value={true} />
                      <span>0.5 km</span>
                    </div>
                  ) : (
                    <Checkbox label={i} readonly />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
