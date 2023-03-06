import { useState, useLayoutEffect, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useLayoutEffect(() => {
    const measure = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  }, [windowWidth]);
  return { windowWidth, isMobile };
};
