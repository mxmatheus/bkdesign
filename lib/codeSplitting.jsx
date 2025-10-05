/**
 * Code Splitting Utilities
 * Provides utilities for lazy loading components with loading states
 */

import dynamic from 'next/dynamic';

/**
 * Default loading component for lazy-loaded components
 */
export function DefaultLoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/**
 * Create a lazy-loaded component with custom loading state
 * @param {Function} importFn - Dynamic import function
 * @param {Object} options - Configuration options
 * @param {boolean} options.ssr - Enable server-side rendering (default: false)
 * @param {React.Component} options.loading - Custom loading component
 * @returns {React.Component} Lazy-loaded component
 */
export function createLazyComponent(importFn, options = {}) {
  const {
    ssr = false,
    loading = DefaultLoadingSpinner
  } = options;

  return dynamic(importFn, {
    ssr,
    loading
  });
}

/**
 * Preload a lazy-loaded component
 * @param {React.Component} LazyComponent - Component to preload
 */
export function preloadComponent(LazyComponent) {
  if (LazyComponent && typeof LazyComponent.preload === 'function') {
    LazyComponent.preload();
  }
}

/**
 * Check if code splitting is supported
 * @returns {boolean} Whether dynamic imports are supported
 */
export function isCodeSplittingSupported() {
  if (typeof window === 'undefined') return true; // Assume supported on server
  
  // Modern browsers support dynamic imports
  return true;
}

/**
 * Lazy load configurations for common component types
 */
export const LAZY_LOAD_CONFIGS = {
  modal: {
    ssr: false,
    loading: () => null // No loading state for modals
  },
  three: {
    ssr: false,
    loading: DefaultLoadingSpinner
  },
  heavy: {
    ssr: false,
    loading: DefaultLoadingSpinner
  },
  section: {
    ssr: true,
    loading: DefaultLoadingSpinner
  }
};
