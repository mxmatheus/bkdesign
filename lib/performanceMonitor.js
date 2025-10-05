/**
 * Performance Monitoring Utilities
 * Provides utilities for monitoring and optimizing runtime performance
 */

/**
 * Performance metrics tracker
 */
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fps: [],
      paintTimes: [],
      layoutShifts: []
    };
    this.isMonitoring = false;
  }

  /**
   * Start monitoring performance
   */
  start() {
    if (typeof window === 'undefined' || this.isMonitoring) return;
    
    this.isMonitoring = true;
    this.monitorFPS();
    this.monitorCLS();
    this.monitorLCP();
  }

  /**
   * Stop monitoring performance
   */
  stop() {
    this.isMonitoring = false;
  }

  /**
   * Monitor FPS (Frames Per Second)
   */
  monitorFPS() {
    if (typeof window === 'undefined') return;
    
    let lastTime = performance.now();
    let frames = 0;

    const measureFPS = () => {
      if (!this.isMonitoring) return;

      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        this.metrics.fps.push(fps);
        
        // Keep only last 60 measurements
        if (this.metrics.fps.length > 60) {
          this.metrics.fps.shift();
        }
        
        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);
  }

  /**
   * Monitor Cumulative Layout Shift (CLS)
   */
  monitorCLS() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            this.metrics.layoutShifts.push(entry.value);
          }
        }
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }

  /**
   * Monitor Largest Contentful Paint (LCP)
   */
  monitorLCP() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.paintTimes.push(lastEntry.renderTime || lastEntry.loadTime);
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }

  /**
   * Get average FPS
   * @returns {number} Average FPS
   */
  getAverageFPS() {
    if (this.metrics.fps.length === 0) return 0;
    
    const sum = this.metrics.fps.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.metrics.fps.length);
  }

  /**
   * Get total CLS score
   * @returns {number} CLS score
   */
  getCLS() {
    return this.metrics.layoutShifts.reduce((a, b) => a + b, 0);
  }

  /**
   * Get LCP time
   * @returns {number} LCP time in milliseconds
   */
  getLCP() {
    if (this.metrics.paintTimes.length === 0) return 0;
    return this.metrics.paintTimes[this.metrics.paintTimes.length - 1];
  }

  /**
   * Get performance report
   * @returns {Object} Performance metrics
   */
  getReport() {
    return {
      averageFPS: this.getAverageFPS(),
      cls: this.getCLS(),
      lcp: this.getLCP(),
      isPerformant: this.getAverageFPS() >= 55 && this.getCLS() < 0.1
    };
  }

  /**
   * Log performance report to console
   */
  logReport() {
    const report = this.getReport();
    console.group('Performance Report');
    console.log(`Average FPS: ${report.averageFPS}`);
    console.log(`CLS Score: ${report.cls.toFixed(4)}`);
    console.log(`LCP Time: ${report.lcp.toFixed(2)}ms`);
    console.log(`Is Performant: ${report.isPerformant ? '✓' : '✗'}`);
    console.groupEnd();
  }
}

// Singleton instance
let monitorInstance = null;

/**
 * Get performance monitor instance
 * @returns {PerformanceMonitor} Monitor instance
 */
export function getPerformanceMonitor() {
  if (!monitorInstance) {
    monitorInstance = new PerformanceMonitor();
  }
  return monitorInstance;
}

/**
 * Check if performance is acceptable (60fps target)
 * @returns {boolean} Whether performance is acceptable
 */
export function isPerformanceAcceptable() {
  const monitor = getPerformanceMonitor();
  const avgFPS = monitor.getAverageFPS();
  return avgFPS === 0 || avgFPS >= 55; // Allow 5fps margin
}

/**
 * Warn if performance is poor
 */
export function warnIfPoorPerformance() {
  if (typeof window === 'undefined') return;
  
  const monitor = getPerformanceMonitor();
  const report = monitor.getReport();
  
  if (!report.isPerformant) {
    console.warn('Performance Warning:', {
      fps: report.averageFPS,
      cls: report.cls,
      lcp: report.lcp
    });
  }
}

/**
 * Performance optimization recommendations
 */
export const PERFORMANCE_TIPS = {
  lowFPS: [
    'Reduce animation complexity',
    'Use transform and opacity only',
    'Enable GPU acceleration',
    'Reduce number of animated elements'
  ],
  highCLS: [
    'Set explicit dimensions for images',
    'Reserve space for dynamic content',
    'Avoid inserting content above existing content',
    'Use CSS transforms instead of layout properties'
  ],
  slowLCP: [
    'Optimize image sizes',
    'Preload critical resources',
    'Reduce server response time',
    'Use CDN for static assets'
  ]
};

export default PerformanceMonitor;
