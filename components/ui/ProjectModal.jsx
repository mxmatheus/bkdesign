'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';

/**
 * ProjectModal Component
 * Modal for displaying detailed project information
 * 
 * @param {Object} props
 * @param {Object} props.project - Project data to display
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Callback to close the modal
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            onClick={onClose}
            aria-label="Close modal"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-8 relative" neonBorder={true} borderColor="cyan">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={t.projects.close}
                  data-cursor-hover
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Project Title */}
                <h2 className="text-4xl font-space font-bold mb-4 text-white pr-12">
                  {project.title}
                </h2>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-mono rounded-full bg-white/5 border border-white/10 text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Long Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-space font-semibold mb-3 text-neon-cyan">
                    About This Project
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <NeonButton
                      variant="cyan"
                      size="md"
                      href={project.liveUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 inline" />
                      View Live
                    </NeonButton>
                  )}
                  {project.githubUrl && (
                    <NeonButton
                      variant="magenta"
                      size="md"
                      href={project.githubUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2 inline" />
                      View Code
                    </NeonButton>
                  )}
                </div>

                {/* Dynamic Accent Color Effect */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-20 blur-xl -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`,
                  }}
                />
              </GlassCard>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
