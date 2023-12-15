import { useCallback, useState } from 'react';

type Toggle = boolean | ((old: boolean) => boolean);

export const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = useCallback((update: Toggle) => {
    if (typeof update === 'boolean') return setIsActive(() => update);
    setIsActive((old) => update(old));
  }, []);

  return [isActive, toggle] as const;
};
