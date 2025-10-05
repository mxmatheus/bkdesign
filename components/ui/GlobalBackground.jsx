'use client';

import AnimatedBackground from './AnimatedBackground';
import ParticleGrid from './ParticleGrid';

/**
 * GlobalBackground Component
 * Provides animated background for the entire site
 * Includes GSAP gradient animation and particle grid
 */
export default function GlobalBackground() {
  return (
    <>
      {/* Base background */}
      <div className="fixed inset-0 bg-[#0d0d0d] -z-10" />
      
      {/* Animated gradient background with GSAP */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* Particle grid */}
      <div className="fixed inset-0 -z-10">
        <ParticleGrid />
      </div>
    </>
  );
}
