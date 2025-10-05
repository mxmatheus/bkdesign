'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * NeonButton Component
 * A button with neon glow effect on hover
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'cyan' | 'magenta'} props.variant - Color variant
 * @param {'sm' | 'md' | 'lg'} props.size - Size variant
 * @param {Function} props.onClick - Click handler
 * @param {string} props.href - Link URL (renders as link if provided)
 * @param {'button' | 'submit'} props.type - Button type
 * @param {string} props.className - Additional CSS classes
 */
export default function NeonButton({
  children,
  variant = 'cyan',
  size = 'md',
  onClick,
  href,
  type = 'button',
  className = '',
}) {
  const baseClasses = 'glass font-space font-semibold transition-all duration-300 ease-out relative overflow-hidden';
  
  const variantClasses = {
    cyan: 'text-neon-cyan border-neon-cyan hover:shadow-neon-cyan',
    magenta: 'text-neon-magenta border-neon-magenta hover:shadow-neon-magenta',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const buttonContent = (
    <motion.span
      className="relative z-10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        data-cursor-hover="true"
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-cursor-hover="true"
    >
      {buttonContent}
    </motion.button>
  );
}
