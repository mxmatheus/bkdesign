'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { skills } from '@/lib/constants';
import { useTranslation } from '@/hooks/useLanguage';

/**
 * Skills Section Component
 * Displays technical skills in a responsive grid with animations
 * 
 * Features:
 * - Responsive grid layout (3/2/1 columns)
 * - Glass morphism cards for each skill
 * - Lucide icons for visual representation
 * - Sequential animations on scroll
 * - Hover effects with neon glow
 */
export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          align="center"
        />

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => {
            // Dynamically get the icon component from Lucide
            const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code2;

            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 0.8,
                  },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    },
                  },
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <GlassCard 
                  hover 
                  className="h-full p-6 group cursor-pointer transition-shadow duration-300 hover:shadow-neon-cyan"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative bg-white/5 p-4 rounded-full">
                        <IconComponent 
                          className="w-8 h-8 text-cyan-400 group-hover:text-magenta-400 transition-colors duration-300" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-semibold text-white font-space">
                      {skill.name}
                    </h3>

                    {/* Category Badge */}
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">
                      {skill.category}
                    </span>

                    {/* Optional: Level Indicator */}
                    {skill.level && (
                      <div className="w-full mt-2">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
