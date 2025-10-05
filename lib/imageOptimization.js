/**
 * Image Optimization Utilities
 * Provides utilities for optimized image loading and responsive sizing
 */

/**
 * Generate responsive image sizes string for Next.js Image component
 * @param {Object} options - Size configuration options
 * @param {string} options.mobile - Mobile viewport size (default: 100vw)
 * @param {string} options.tablet - Tablet viewport size (default: 50vw)
 * @param {string} options.desktop - Desktop viewport size (default: 33vw)
 * @returns {string} Sizes string for Next.js Image
 */
export function getResponsiveImageSizes({
  mobile = '100vw',
  tablet = '50vw',
  desktop = '33vw'
} = {}) {
  return `(max-width: 768px) ${mobile}, (max-width: 1200px) ${tablet}, ${desktop}`;
}

/**
 * Check if an image should be lazy loaded based on its position
 * @param {boolean} isAboveFold - Whether the image is above the fold
 * @returns {string} Loading strategy ('eager' or 'lazy')
 */
export function getImageLoadingStrategy(isAboveFold = false) {
  return isAboveFold ? 'eager' : 'lazy';
}

/**
 * Get priority flag for Next.js Image component
 * @param {boolean} isAboveFold - Whether the image is above the fold
 * @returns {boolean} Priority flag
 */
export function getImagePriority(isAboveFold = false) {
  return isAboveFold;
}

/**
 * Handle image loading errors with fallback
 * @param {Event} event - Error event
 * @param {string} fallbackSrc - Fallback image source
 */
export function handleImageError(event, fallbackSrc = '/placeholder.svg') {
  if (event.target && event.target.src !== fallbackSrc) {
    event.target.src = fallbackSrc;
  }
}

/**
 * Preload critical images
 * @param {string[]} imageSrcs - Array of image sources to preload
 */
export function preloadImages(imageSrcs) {
  if (typeof window === 'undefined') return;
  
  imageSrcs.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Get optimized image sizes for different use cases
 */
export const IMAGE_SIZES = {
  hero: {
    sizes: '100vw',
    priority: true,
    loading: 'eager'
  },
  project: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: false,
    loading: 'lazy'
  },
  avatar: {
    sizes: '(max-width: 768px) 80vw, 400px',
    priority: false,
    loading: 'lazy'
  },
  thumbnail: {
    sizes: '(max-width: 768px) 50vw, 200px',
    priority: false,
    loading: 'lazy'
  }
};
