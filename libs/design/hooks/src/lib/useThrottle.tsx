import { useEffect, useState } from 'react';

// Throttle waits for delay milliseconds after every call
export const useThrottle = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  callback: T,
  delay: number,
) => {
  const [throttleId, setThrottleId] = useState<NodeJS.Timeout>();

  useEffect(() => () => throttleId && clearTimeout(throttleId), [throttleId]);

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    if (throttleId) return;
    setThrottleId(setTimeout(() => setThrottleId(undefined), delay));
    return callback(...args);
  };
};
