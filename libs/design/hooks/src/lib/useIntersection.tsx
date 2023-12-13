import  { useEffect, useRef } from 'react';

export function useIntersection<T extends HTMLElement>(
  onIntersection: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useRef<T>(null);
  const remove = () => observer.current?.disconnect();

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersection, options);
    if (ref.current) observer.current.observe(ref.current);

    return remove;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onIntersection, options, ref.current]);

  return { ref, remove };
}
