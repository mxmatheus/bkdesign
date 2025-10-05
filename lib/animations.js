/**
 * Framer Motion animation variants for consistent animations across the portfolio
 * These variants are used with Framer Motion's motion components
 * 
 * Performance optimizations:
 * - All animations use GPU-accelerated properties (transform, opacity)
 * - Optimized easing functions for smooth 60fps performance
 * - Reduced motion support through getOptimalAnimationDuration
 */

import { getOptimalAnimationDuration } from './animationPerformance';

// Fade up animation - used for section content entering from below
// Uses transform (translateY) and opacity for GPU acceleration
export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: getOptimalAnimationDuration(600) / 1000, 
    ease: [0.6, -0.05, 0.01, 0.99] 
  }
};

// Scale in animation - used for cards and interactive elements
// Uses transform (scale) and opacity for GPU acceleration
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: getOptimalAnimationDuration(500) / 1000, 
    ease: [0.6, -0.05, 0.01, 0.99] 
  }
};

// Stagger container - used to animate children sequentially
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Stagger item - used with staggerContainer for child elements
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Modal animations - used for project modal and overlays
// Uses transform (scale) and opacity for GPU acceleration
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: getOptimalAnimationDuration(300) / 1000, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { 
      duration: getOptimalAnimationDuration(200) / 1000, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    }
  }
};

// Backdrop animation - used for modal backdrop
// Uses opacity only for GPU acceleration
export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: getOptimalAnimationDuration(200) / 1000 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: getOptimalAnimationDuration(200) / 1000 }
  }
};

// Slide in from left - used for navigation and side elements
// Uses transform (translateX) and opacity for GPU acceleration
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: getOptimalAnimationDuration(500) / 1000, 
    ease: [0.6, -0.05, 0.01, 0.99] 
  }
};

// Slide in from right - used for navigation and side elements
// Uses transform (translateX) and opacity for GPU acceleration
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: getOptimalAnimationDuration(500) / 1000, 
    ease: [0.6, -0.05, 0.01, 0.99] 
  }
};

// Fade in - simple fade animation
// Uses opacity only for GPU acceleration
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: getOptimalAnimationDuration(400) / 1000 }
};
