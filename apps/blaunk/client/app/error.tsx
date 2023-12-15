'use client';
import './global.css';
import styles from './base.module.css';

import { useEffect } from 'react';
import clsx from 'clsx';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, [error.message]);

  return (
    <div className={clsx(styles.pages, styles.error)}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
