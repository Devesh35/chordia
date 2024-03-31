'use client';
import styles from './base.module.css';
import './global.css';

import clsx from 'clsx';
import { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, [error.message]);

  return (
    <div className={clsx(styles.page, styles.error)}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
