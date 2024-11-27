'use client';

import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isTab, setIsTab] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleResizeTab = () => {
      setIsTab(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResizeTab);
  });

  return { isMobile, isTab };
};
