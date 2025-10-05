'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * GlassCard Component
 * A reusable card component with glass morphism effect
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display inside the card
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable 3D tilt effect on hover
 * @param {boolean} props.neonBorder - Add neon border effect
 * @param {'cyan' | 'magenta'} props.borderColor - Color variant for neon border
 */
export default function GlassCard({ 
  children, 
  className = '', 
  hover = false,
  neonBorder = false,
  borderColor = 'cyan'
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!hover) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!hover) return;
    setTilt({ x: 0, y: 0 });
  };

  const borderColorClass = borderColor === 'magenta' 
    ? 'border-neon-magenta' 
    : 'border-neon-cyan';

  return (
    <motion.div
      className={`
        glass
        ${neonBorder ? `border-2 ${borderColorClass}` : ''}
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
