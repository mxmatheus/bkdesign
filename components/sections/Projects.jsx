'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/lib/constants';
import { useTranslation } from '@/hooks/useLanguage';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { IMAGE_SIZES, handleImageError } from '@/lib/imageOptimization';

// Lazy load ProjectModal component
const ProjectModal = dynamic(() => import('@/components/ui/ProjectModal'), {
  ssr: false
});

/**
 * ProjectCard Component
 * Individual project card with image, title, and technologies
 */
function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard 
        className="overflow-hidden cursor-pointer group"
        hover={true}
        data-cursor-hover
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Project Image/Video */}
      <div className="relative w-full h-64 overflow-hidden">
        {/* Static Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            isHovered && project.video && videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          sizes={IMAGE_SIZES.project.sizes}
          loading={IMAGE_SIZES.project.loading}
          priority={IMAGE_SIZES.project.priority}
          onError={(e) => handleImageError(e)}
        />

        {/* Video Preview on Hover */}
        {project.video && (
          <video
            src={project.video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-space font-semibold mb-3 text-white">
          {project.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neon-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
    </motion.div>
  );
}

/**
 * Projects Section Component
 * Displays portfolio projects in a responsive grid
 */
export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: selectedProject && isModalOpen
          ? `radial-gradient(circle at 50% 50%, ${selectedProject.accentColor}15, transparent 50%)`
          : 'transparent',
        transition: 'background 0.5s ease',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title={t.projects.title}
            subtitle={t.projects.subtitle}
            align="center"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <div key={project.id} onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
