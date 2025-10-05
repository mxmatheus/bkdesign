"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress
 * Returns a value between 0 and 1 representing scroll position
 * 
 * @returns {number} Scroll progress (0 to 1)
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate total scrollable distance
      const scrollableDistance = documentHeight - windowHeight;
      
      // Calculate progress (0 to 1)
      const progress = scrollableDistance > 0 
        ? scrollTop / scrollableDistance 
        : 0;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    // Calculate initial progress
    calculateScrollProgress();

    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return scrollProgress;
}
