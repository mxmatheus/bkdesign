'use client';

import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * A title component with gradient text effect and fade-up animation
 * 
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {'left' | 'center' | 'right'} props.align - Text alignment
 * @param {string} props.className - Additional CSS classes
 */
export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const fadeUpVariant = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <motion.div
      className={`${alignmentClasses[align]} ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-space font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-4"
        variants={fadeUpVariant}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-text-secondary text-lg md:text-xl mt-4"
          variants={fadeUpVariant}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
