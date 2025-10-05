'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCursor Component
 * A custom animated cursor that follows mouse movement
 * 
 * @param {Object} props
 * @param {string} props.color - Cursor color (default: cyan)
 * @param {number} props.size - Base cursor size in pixels (default: 20)
 */
export default function AnimatedCursor({ color = '#00ffff', size = 20 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't track mouse on mobile devices
    if (isMobile) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('data-cursor-hover') === 'true' ||
        target.closest('[data-cursor-hover="true"]');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  const cursorSize = isHovering ? size * 2 : size;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - cursorSize / 2,
          y: mousePosition.y - cursorSize / 2,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: cursorSize,
          height: cursorSize,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
            opacity: 0.8,
          }}
        />
      </motion.div>

      {/* Cursor trail/ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: mousePosition.x - (cursorSize * 2) / 2,
          y: mousePosition.y - (cursorSize * 2) / 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
        style={{
          width: cursorSize * 2,
          height: cursorSize * 2,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{
            borderColor: color,
            opacity: 0.3,
          }}
        />
      </motion.div>
    </>
  );
}
