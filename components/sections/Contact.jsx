'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import SectionTitle from '@/components/ui/SectionTitle';
import { useTranslation } from '@/hooks/useLanguage';

/**
 * Contact Section Component
 * Displays a contact form with glass morphism effect and neon styling
 */
export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured. Using mock submission.');
        // Simulate API call for development
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // Send email using EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_name: 'Portfolio Owner', // You can customize this
          },
          publicKey
        );
      }
      
      setSubmitStatus('success');
      reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title={t.contact.title} 
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl md:text-2xl text-text-secondary mb-12">
            Let&apos;s create something together 💡
          </p>
        </motion.div>

        <GlassCard className="p-8 md:p-12" neonBorder borderColor="cyan">
          <motion.form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {/* Name Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: t.contact.validation.nameRequired,
                  minLength: {
                    value: 2,
                    message: t.contact.validation.nameMin
                  }
                })}
                className={`
                  w-full px-4 py-3 rounded-lg
                  bg-white/5 border
                  ${errors.name ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'border-white/20'}
                  text-text-primary placeholder-text-secondary/50
                  focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                `}
                placeholder={t.contact.form.name}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t.contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: t.contact.validation.emailRequired,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t.contact.validation.emailInvalid
                  }
                })}
                className={`
                  w-full px-4 py-3 rounded-lg
                  bg-white/5 border
                  ${errors.email ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'border-white/20'}
                  text-text-primary placeholder-text-secondary/50
                  focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                `}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-text-primary mb-2"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', {
                  required: t.contact.validation.messageRequired,
                  minLength: {
                    value: 10,
                    message: t.contact.validation.messageMin
                  }
                })}
                className={`
                  w-full px-4 py-3 rounded-lg
                  bg-white/5 border
                  ${errors.message ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'border-white/20'}
                  text-text-primary placeholder-text-secondary/50
                  focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                  resize-none
                `}
                placeholder="Tell me about your project..."
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              className="flex justify-center pt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div
                whileHover={{
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <NeonButton
                  type="submit"
                  variant="cyan"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </NeonButton>
              </motion.div>
            </motion.div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.05, 1, 0.95]
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.2, 0.8, 1],
                  ease: "easeInOut"
                }}
                className="text-center text-neon-cyan font-medium text-lg"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center text-red-400 font-medium"
              >
                ✗ {t.contact.form.error}
              </motion.div>
            )}
          </motion.form>
        </GlassCard>
      </div>
    </section>
  );
}
