import { useCallback, useState } from 'react';

// Loops in range 0 - max-1
export function useRangeIndex(max: number, min: number = 0) {
  const [active, setActive] = useState(min);

  const update = useCallback(
    (dx: number) => setActive((active + dx + max) % max),
    [active, max],
  );

  const updateTo = useCallback(
    (x: number) => setActive(Math.max(0, Math.min(x, max))),
    [max],
  );

  const isNearActive = useCallback(
    (i: number) =>
      i === active - 1 ||
      i === active ||
      i === active + 1 ||
      (active === 0 && i === max - 1) ||
      (active === max - 1 && i === 0),
    [active, max],
  );

  return { active, update, updateTo, isNearActive };
}
