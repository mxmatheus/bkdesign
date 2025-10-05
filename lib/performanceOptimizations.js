/**
 * Performance Optimization Utilities
 * Collection of utilities to improve site performance
 */

/**
 * Debounce function to limit execution rate
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
 * Throttle function to limit execution frequency
 */
export function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Request idle callback polyfill
 */
export const requestIdleCallback =
  typeof window !== 'undefined' && window.requestIdleCallback
    ? window.requestIdleCallback
    : (cb) => setTimeout(cb, 1);

/**
 * Cancel idle callback polyfill
 */
export const cancelIdleCallback =
  typeof window !== 'undefined' && window.cancelIdleCallback
    ? window.cancelIdleCallback
    : (id) => clearTimeout(id);

/**
 * Preload critical resources
 */
export function preloadResource(href, as, type) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

/**
 * Prefetch resources for next navigation
 */
export function prefetchResource(href) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages(selector = 'img[data-src]') {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const images = document.querySelectorAll(selector);
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/**
 * Optimize animations for performance
 */
export function optimizeAnimation(element, property = 'transform') {
  if (typeof window === 'undefined') return;

  // Add will-change hint
  element.style.willChange = property;

  // Remove will-change after animation
  const removeWillChange = () => {
    element.style.willChange = 'auto';
    element.removeEventListener('animationend', removeWillChange);
    element.removeEventListener('transitionend', removeWillChange);
  };

  element.addEventListener('animationend', removeWillChange);
  element.addEventListener('transitionend', removeWillChange);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get connection speed
 */
export function getConnectionSpeed() {
  if (typeof navigator === 'undefined' || !navigator.connection) {
    return 'unknown';
  }

  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;

  return effectiveType; // '4g', '3g', '2g', 'slow-2g'
}

/**
 * Check if connection is slow
 */
export function isSlowConnection() {
  const speed = getConnectionSpeed();
  return speed === '2g' || speed === 'slow-2g';
}

/**
 * Adaptive loading based on connection
 */
export function shouldLoadHeavyContent() {
  if (typeof navigator === 'undefined') return true;

  // Don't load heavy content on slow connections
  if (isSlowConnection()) return false;

  // Check data saver mode
  if (navigator.connection?.saveData) return false;

  return true;
}

/**
 * Measure performance metric
 */
export function measurePerformance(name, fn) {
  if (typeof performance === 'undefined') {
    return fn();
  }

  const startMark = `${name}-start`;
  const endMark = `${name}-end`;
  const measureName = name;

  performance.mark(startMark);
  const result = fn();
  performance.mark(endMark);
  performance.measure(measureName, startMark, endMark);

  const measure = performance.getEntriesByName(measureName)[0];
  console.log(`⚡ ${name}: ${measure.duration.toFixed(2)}ms`);

  // Clean up
  performance.clearMarks(startMark);
  performance.clearMarks(endMark);
  performance.clearMeasures(measureName);

  return result;
}

/**
 * Get Core Web Vitals
 * Note: Requires web-vitals package to be installed
 * This function is designed for browser use only
 */
export function getCoreWebVitals() {
  if (typeof window === 'undefined') return Promise.resolve(null);

  // Return a promise that resolves with vitals or null
  return new Promise((resolve) => {
    try {
      // Use Function constructor to avoid static analysis
      const dynamicImport = new Function('specifier', 'return import(specifier)');
      
      dynamicImport('web-vitals')
        .then((webVitals) => {
          const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
          const vitals = {};

          getCLS((metric) => { vitals.cls = metric.value; });
          getFID((metric) => { vitals.fid = metric.value; });
          getFCP((metric) => { vitals.fcp = metric.value; });
          getLCP((metric) => { vitals.lcp = metric.value; });
          getTTFB((metric) => { vitals.ttfb = metric.value; });

          resolve(vitals);
        })
        .catch(() => {
          console.warn('web-vitals package not installed');
          resolve(null);
        });
    } catch (error) {
      console.warn('web-vitals not available:', error);
      resolve(null);
    }
  });
}

/**
 * Report Core Web Vitals to analytics
 */
export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

/**
 * Optimize font loading
 */
export function optimizeFontLoading() {
  if (typeof document === 'undefined') return;

  // Use font-display: swap for all fonts
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Reduce layout shifts
 */
export function preventLayoutShift(element, aspectRatio) {
  if (!element) return;

  element.style.aspectRatio = aspectRatio;
  element.style.width = '100%';
  element.style.height = 'auto';
}

/**
 * Batch DOM reads and writes
 */
export class DOMBatcher {
  constructor() {
    this.reads = [];
    this.writes = [];
    this.scheduled = false;
  }

  read(fn) {
    this.reads.push(fn);
    this.schedule();
  }

  write(fn) {
    this.writes.push(fn);
    this.schedule();
  }

  schedule() {
    if (this.scheduled) return;
    this.scheduled = true;

    requestAnimationFrame(() => {
      // Execute all reads first
      this.reads.forEach(fn => fn());
      this.reads = [];

      // Then execute all writes
      this.writes.forEach(fn => fn());
      this.writes = [];

      this.scheduled = false;
    });
  }
}

export const domBatcher = new DOMBatcher();
