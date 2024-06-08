import { RefObject, useCallback, useEffect, useState } from 'react';

const scrollInterval_ms = 10;

export const useHoverScroll = (
  ref: RefObject<HTMLDivElement>,
  speed: number = 2,
  endOffset: number = 10,
  scrollDirection: 'vertical' | 'horizontal' = 'vertical',
) => {
  const [isEndOne, setIsEndOne] = useState(false);
  const [isEndTwo, setIsEndTwo] = useState(false);

  const [hoverId, setHoverId] = useState<NodeJS.Timer>();
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleHover = useCallback(
    (dx: 1 | -1) => () => {
      const element = ref.current;
      if (!element) return;
      const scrollStep = dx * speed;
      setHoverId(
        setInterval(() => {
          if (scrollDirection === 'horizontal')
            element.scrollLeft += scrollStep;
          else element.scrollTop += scrollStep;
        }, scrollInterval_ms),
      );
      setDirection(dx);
    },
    [ref, scrollDirection, speed],
  );

  const handleMouseLeave = useCallback(() => {
    console.log('called');
    if (hoverId) clearInterval(hoverId);
    setHoverId(undefined);
  }, [hoverId]);

  const handleScrollEnd = useCallback(() => {
    const extraSteps = endOffset / speed;
    setTimeout(handleMouseLeave, extraSteps * scrollInterval_ms);
  }, [endOffset, handleMouseLeave, speed]);

  // This does not work as intended
  // useEffect(() => {
  //   if (isEndOne || isEndTwo) handleMouseLeave();
  // }, [handleMouseLeave, isEndTwo, isEndOne]);

  // Stops the scroll when the scroll reaches the top or bottom
  useEffect(() => {
    if (direction === 1 && isEndTwo) handleScrollEnd();
    if (direction === -1 && isEndOne) handleScrollEnd();
  }, [direction, handleScrollEnd, isEndTwo, isEndOne]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const set = (div: HTMLDivElement) => {
      const { scrollTop, clientHeight, scrollHeight } = div;
      setIsEndOne(scrollTop <= endOffset);
      setIsEndTwo(scrollTop + clientHeight >= scrollHeight - endOffset);
    };

    const scroll = (e: Event) => {
      if (!e.target) return;
      set(e.target as HTMLDivElement);
    };
    currentRef?.addEventListener('scroll', scroll);
    set(currentRef);
    return () => currentRef?.removeEventListener('scroll', scroll);
  }, [endOffset, ref]);

  return { handleHover, handleMouseLeave, isEndOne, isEndTwo };
};
