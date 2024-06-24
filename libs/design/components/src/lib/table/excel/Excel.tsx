'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './excel.module.css';

const emptyData = new Array(10).fill('').map(() => new Array(10).fill(''));

const dynamicSize = false;

export const Excel = () => {
  const [data, setData] = useState<string[][]>(emptyData);

  const [colHeader, setColHeader] = useState<string[]>(() =>
    new Array(10).fill(''),
  );
  const [rowHeader, setRowHeader] = useState<string[]>(() =>
    new Array(10).fill(''),
  );

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          {dynamicSize && (
            <tr>
              <td></td>
              <td></td>
              {colHeader.map((head, i) => (
                <td key={i}>X</td>
              ))}
            </tr>
          )}
          <tr>
            {dynamicSize && <td></td>}
            <td></td>
            {colHeader.map((head, i) => (
              <td key={i}>
                <input
                  value={head}
                  onChange={(e) =>
                    setColHeader((old) => {
                      old[i] = e.target.value;
                      return [...old];
                    })
                  }
                  placeholder="36"
                />
              </td>
            ))}

            {dynamicSize && (
              <td className={clsx(styles['no-border'])}>+ column</td>
            )}
          </tr>
          {data.map((row, k) => (
            <tr key={k}>
              {dynamicSize && <td>x</td>}
              <td>
                <input
                  value={rowHeader[k]}
                  onChange={(e) =>
                    setRowHeader((old) => {
                      old[k] = e.target.value;
                      return [...old];
                    })
                  }
                  type="color"
                />
              </td>
              {row.map((r, i) => (
                <td key={i}>
                  <input
                    value={r}
                    onChange={(e) =>
                      setData((old) => {
                        old[k][i] = e.target.value;
                        return [...old];
                      })
                    }
                    placeholder="-"
                  />
                </td>
              ))}
            </tr>
          ))}
          {dynamicSize && (
            <tr>
              <td className={clsx(styles['no-border'])}>+ row</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
