import { Checkbox, Input } from '@li/design/elements';
import { AmenitiesItems } from '@md/blaunk/config';
import styles from './amenities.module.css';
import clsx from 'clsx';

function transposeArray(array: string[][]) {
  const newArray: string[][] = [[]];
  for (let i = 0; i < array.length; i++) {
    newArray.push([]);
  }
  const arrayLength = array[0].length;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}
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
                      <Checkbox label={i} />
                      <span>
                        <Input className={styles.input} />
                      </span>
                    </div>
                  ) : (
                    <Checkbox label={i} />
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
