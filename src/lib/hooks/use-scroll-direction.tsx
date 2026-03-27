'use client';
import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, threshold]);

  return scrollDirection;
};

export default useScrollDirection;
