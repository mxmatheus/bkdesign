/**
 * WebGL detection and 3D capability utilities
 */

/**
 * Check if WebGL is supported in the current browser
 * @returns {boolean} True if WebGL is available
 */
export function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

/**
 * Check if WebGL2 is supported in the current browser
 * @returns {boolean} True if WebGL2 is available
 */
export function isWebGL2Available() {
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext('webgl2');
  } catch (e) {
    return false;
  }
}

/**
 * Get WebGL capabilities and performance tier
 * @returns {Object} WebGL capabilities information
 */
export function getWebGLCapabilities() {
  if (!isWebGLAvailable()) {
    return {
      available: false,
      version: null,
      renderer: null,
      vendor: null,
      performanceTier: 'none'
    };
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
    const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown';
    
    // Determine performance tier based on renderer
    let performanceTier = 'medium';
    const rendererLower = renderer.toLowerCase();
    
    if (rendererLower.includes('intel') || rendererLower.includes('integrated')) {
      performanceTier = 'low';
    } else if (rendererLower.includes('nvidia') || rendererLower.includes('amd') || rendererLower.includes('radeon')) {
      performanceTier = 'high';
    }
    
    return {
      available: true,
      version: isWebGL2Available() ? 2 : 1,
      renderer,
      vendor,
      performanceTier
    };
  } catch (e) {
    return {
      available: true,
      version: 1,
      renderer: 'Unknown',
      vendor: 'Unknown',
      performanceTier: 'medium'
    };
  }
}

/**
 * Check if device should use 3D content based on capabilities
 * @param {boolean} isMobile - Whether the device is mobile
 * @param {boolean} prefersReducedMotion - Whether user prefers reduced motion
 * @returns {boolean} True if 3D content should be used
 */
export function shouldUse3D(isMobile = false, prefersReducedMotion = false) {
  // Don't use 3D on mobile or if user prefers reduced motion
  if (isMobile || prefersReducedMotion) {
    return false;
  }
  
  // Check WebGL availability
  if (!isWebGLAvailable()) {
    return false;
  }
  
  // Check performance tier
  const capabilities = getWebGLCapabilities();
  
  // Only use 3D on medium or high performance devices
  return capabilities.performanceTier !== 'low';
}
