'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NeonButton from '@/components/ui/NeonButton';

/**
 * Hero Section Component
 * Full-screen hero section with centered content, animations, and CTA buttons
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - Name to display
 * @param {string} props.title - Title/role to display
 * @param {string} props.description - Description text
 * @param {Array} props.ctaButtons - Array of CTA button objects with text, href, and variant
 */
export default function Hero({ name, title, description, ctaButtons = [] }) {
  const heroRef = useRef(null);

  // Scroll-based blur and opacity effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to blur value (0px to 10px)
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  // Transform scroll progress to opacity (1 to 0.3)
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Animation variants for sequential animations
  const logoVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const nameVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 1.0, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const ctaVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content Container with scroll-based blur and opacity */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          filter: useTransform(blurValue, (value) => `blur(${value}px)`),
          opacity: opacityValue
        }}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          
          {/* Logo/Icon with fade-in animation (0.5s delay) */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta p-1"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <div className="w-full h-full rounded-full bg-[#0d0d0d] flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                {name?.charAt(0) || 'B'}
              </span>
            </div>
          </motion.div>

          {/* Name with slide-up animation (0.8s delay) */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-space"
            variants={nameVariants}
            initial="initial"
            animate="animate"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          {/* Title with slide-up animation (1.0s delay) */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-space"
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>

          {/* Description with fade-in animation (1.0s delay) */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-inter px-4"
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
          >
            {description}
          </motion.p>

          {/* CTA Buttons with scale animation (1.2s delay) */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
            variants={ctaVariants}
            initial="initial"
            animate="animate"
          >
            {ctaButtons.map((button, index) => (
              <NeonButton
                key={index}
                href={button.href}
                variant={button.variant}
                size="lg"
              >
                {button.text}
              </NeonButton>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 font-inter">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
