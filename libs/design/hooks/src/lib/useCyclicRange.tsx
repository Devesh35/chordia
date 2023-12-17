import { useCallback, useRef, useState } from 'react';

// Loops in range 0 - max-1
export function useCyclicRange(max: number, min: number = 0) {
  const prev = useRef(max - 1);
  const [active, setActive] = useState(min);

  const updateBy = useCallback(
    (dx: number) => {
      prev.current = active;
      setActive((active + dx + max) % max);
    },
    [active, max],
  );

  const updateTo = useCallback(
    (x: number) => {
      prev.current = active;
      setActive(((x % max) + max) % max);
    },
    [active, max],
  );

  const isNearActive = useCallback(
    (i: number, level: number = 1) =>
      Array.from(
        { length: level * 2 + 1 },
        (_, j) => (active + j + max - level) % max,
      ).includes(i),
    [active, max],
  );

  return {
    active,
    prev: prev.current,
    left: (active + -1 + max) % max,
    right: (active + 1 + max) % max,
    updateBy,
    updateTo,
    isNearActive,
  };
}
