'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { footerSocialLinks, siteConfig } from '@/lib/constants';
import { useTranslation } from '@/hooks/useLanguage';

/**
 * Footer Component
 * Minimal footer with social links and scroll-to-top functionality
 */
export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {footerSocialLinks.map((link) => {
            const Icon = LucideIcons[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-white/60 hover:text-neon-cyan transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright Text */}
        <p className="text-center text-white/40 text-sm mb-8">
          © {currentYear} {siteConfig.name}. {t.footer.rights}.
        </p>

        {/* Scroll to Top Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t.footer.scrollTop}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
