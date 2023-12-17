import { useEffect, useState } from 'react';

// Debounce resets the timer and waits for delay milliseconds
export const useDebounce = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  callback: T,
  delay: number,
) => {
  const [debounceId, setDebounceId] = useState<NodeJS.Timeout>();

  useEffect(() => () => debounceId && clearTimeout(debounceId), [debounceId]);

  return (...args: Parameters<T>) => {
    debounceId && clearTimeout(debounceId);
    setDebounceId(setTimeout(() => callback(...args), delay));
  };
};
