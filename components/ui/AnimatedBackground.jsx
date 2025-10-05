'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * AnimatedBackground Component
 * Creates a lava lamp-like flowing gradient background with color transitions
 * Uses GSAP for smooth animations and color morphing
 * Optimized for 60fps performance
 */
export default function AnimatedBackground() {
  const backgroundRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Create a timeline for the lava lamp effect
    const tl = gsap.timeline({ repeat: -1 });

    // Animate background position for flowing effect
    tl.to(backgroundRef.current, {
      backgroundPosition: '100% 50%',
      duration: 15,
      ease: 'sine.inOut',
    })
      .to(backgroundRef.current, {
        backgroundPosition: '0% 100%',
        duration: 15,
        ease: 'sine.inOut',
      })
      .to(backgroundRef.current, {
        backgroundPosition: '50% 0%',
        duration: 15,
        ease: 'sine.inOut',
      })
      .to(backgroundRef.current, {
        backgroundPosition: '0% 50%',
        duration: 15,
        ease: 'sine.inOut',
      });

    // Create color morphing animation
    const colorTl = gsap.timeline({ repeat: -1 });

    // Cycle through different color combinations (lava lamp style)
    const colorStops = [
      // Cyan to Magenta
      'radial-gradient(at 20% 30%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(255, 0, 128, 0.3) 0%, transparent 50%), radial-gradient(at 40% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #1a0a2a 50%, #0d0d0d 100%)',
      // Purple to Cyan
      'radial-gradient(at 70% 50%, rgba(138, 43, 226, 0.3) 0%, transparent 50%), radial-gradient(at 30% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(at 60% 20%, rgba(255, 0, 128, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #0a1a2a 50%, #0d0d0d 100%)',
      // Magenta to Purple
      'radial-gradient(at 40% 70%, rgba(255, 0, 128, 0.3) 0%, transparent 50%), radial-gradient(at 80% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%), radial-gradient(at 20% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #2a0a1a 50%, #0d0d0d 100%)',
      // Cyan to Purple
      'radial-gradient(at 60% 40%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(at 20% 70%, rgba(138, 43, 226, 0.3) 0%, transparent 50%), radial-gradient(at 80% 80%, rgba(255, 0, 128, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #0a2a1a 50%, #0d0d0d 100%)',
    ];

    colorStops.forEach((gradient, index) => {
      colorTl.to(
        backgroundRef.current,
        {
          background: gradient,
          duration: 12,
          ease: 'sine.inOut',
        },
        index * 12
      );
    });

    return () => {
      tl.kill();
      colorTl.kill();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 opacity-60"
      style={{
        background:
          'radial-gradient(at 20% 30%, rgba(0, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(255, 0, 128, 0.3) 0%, transparent 50%), radial-gradient(at 40% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0d0d0d 0%, #1a0a2a 50%, #0d0d0d 100%)',
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 50%',
        willChange: 'background, background-position',
        filter: 'blur(60px)',
      }}
    />
  );
}
