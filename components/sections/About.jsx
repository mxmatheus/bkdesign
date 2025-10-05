'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import GlassCard from '@/components/ui/GlassCard';
import { fadeUp } from '@/lib/animations';
import { useTranslation } from '@/hooks/useLanguage';

// Lazy load Avatar3D component with loading state
const Avatar3D = dynamic(() => import('@/components/ui/Avatar3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

/**
 * About Section Component
 * Displays information about the portfolio owner with a two-column layout
 * Features fadeUp animations on scroll and 3D tilt effect on card hover
 * 
 * @param {Object} props
 * @param {string[]} props.paragraphs - Array of paragraph texts
 */
export default function About() {
  const { t } = useTranslation();
  const paragraphs = t.about.paragraphs;
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <GlassCard
          className="p-8 md:p-12"
          hover={true}
          neonBorder={true}
          borderColor="cyan"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl font-space font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
                initial={fadeUp.initial}
                whileInView={fadeUp.animate}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {t.about.title}
              </motion.h2>

              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-text-secondary leading-relaxed text-base md:text-lg"
                  initial={fadeUp.initial}
                  whileInView={fadeUp.animate}
                  transition={{ ...fadeUp.transition, delay: 0.3 + (index * 0.15) }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              className="flex items-center justify-center"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full max-w-md aspect-square relative">
                <Avatar3D />
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
