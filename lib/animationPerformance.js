/**
 * Animation Performance Utilities
 * Provides utilities for optimizing animation performance
 */

/**
 * Debounce function for scroll event listeners
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 100) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for high-frequency events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 100) {
  let inThrottle;
  
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Request animation frame wrapper for smooth animations
 * @param {Function} callback - Animation callback
 * @returns {number} Animation frame ID
 */
export function requestAnimationFrameWrapper(callback) {
  if (typeof window === 'undefined') return 0;
  
  return window.requestAnimationFrame(callback);
}

/**
 * Cancel animation frame wrapper
 * @param {number} id - Animation frame ID
 */
export function cancelAnimationFrameWrapper(id) {
  if (typeof window === 'undefined') return;
  
  window.cancelAnimationFrame(id);
}

/**
 * Apply will-change CSS property to element
 * @param {HTMLElement} element - DOM element
 * @param {string} properties - CSS properties to optimize (e.g., 'transform, opacity')
 */
export function applyWillChange(element, properties = 'transform, opacity') {
  if (!element) return;
  
  element.style.willChange = properties;
}

/**
 * Remove will-change CSS property from element
 * @param {HTMLElement} element - DOM element
 */
export function removeWillChange(element) {
  if (!element) return;
  
  element.style.willChange = 'auto';
}

/**
 * Optimize element for GPU acceleration
 * @param {HTMLElement} element - DOM element
 */
export function enableGPUAcceleration(element) {
  if (!element) return;
  
  // Force GPU acceleration with 3D transform
  element.style.transform = element.style.transform || 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
}

/**
 * Check if animations should be reduced based on user preferences
 * @returns {boolean} Whether to reduce animations
 */
export function shouldReduceAnimations() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  
  try {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  } catch (e) {
    return false;
  }
}

/**
 * Get optimal animation duration based on user preferences
 * @param {number} defaultDuration - Default duration in milliseconds
 * @returns {number} Optimized duration
 */
export function getOptimalAnimationDuration(defaultDuration = 300) {
  return shouldReduceAnimations() ? 0 : defaultDuration;
}

/**
 * Measure FPS (Frames Per Second)
 * @param {Function} callback - Callback with FPS value
 * @param {number} duration - Measurement duration in milliseconds
 */
export function measureFPS(callback, duration = 1000) {
  if (typeof window === 'undefined') return;
  
  let frames = 0;
  let lastTime = performance.now();
  let startTime = lastTime;
  
  function countFrames() {
    frames++;
    const currentTime = performance.now();
    
    if (currentTime - startTime >= duration) {
      const fps = Math.round((frames * 1000) / (currentTime - startTime));
      callback(fps);
      return;
    }
    
    requestAnimationFrame(countFrames);
  }
  
  requestAnimationFrame(countFrames);
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - DOM element
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} Whether element is in viewport
 */
export function isInViewport(element, threshold = 0) {
  if (!element || typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  return vertInView && horInView;
}

/**
 * Optimize scroll listener with passive flag
 * @param {Function} handler - Scroll handler function
 * @param {Object} options - Event listener options
 * @returns {Function} Cleanup function
 */
export function addOptimizedScrollListener(handler, options = {}) {
  if (typeof window === 'undefined') return () => {};
  
  const optimizedOptions = {
    passive: true,
    capture: false,
    ...options
  };
  
  window.addEventListener('scroll', handler, optimizedOptions);
  
  return () => {
    window.removeEventListener('scroll', handler, optimizedOptions);
  };
}

/**
 * Animation performance configuration
 */
export const ANIMATION_CONFIG = {
  // Use GPU-accelerated properties only
  gpuProperties: ['transform', 'opacity'],
  
  // Optimal durations for different animation types
  durations: {
    fast: 150,
    normal: 300,
    slow: 500
  },
  
  // Easing functions
  easings: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.6, -0.05, 0.01, 0.99)'
  },
  
  // Debounce/throttle timings
  timings: {
    scroll: 100,
    resize: 150,
    input: 300
  }
};
