'use client';
import styles from './base.module.css';
import './global.css';

import { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, [error.message]);

  return (
    <html lang="en">
      <body>
        <div className={styles.error}>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
