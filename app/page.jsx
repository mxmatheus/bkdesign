'use client';

import { AnimatedCursor } from '@/components/ui';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslation } from '@/hooks/useLanguage';

export default function Home() {
  const { t } = useTranslation();
  
  const heroButtons = [
    {
      text: t.hero.cta.projects,
      href: "#projects",
      variant: "cyan"
    },
    {
      text: t.hero.cta.contact,
      href: "#contact",
      variant: "magenta"
    }
  ];

  return (
    <>
      <AnimatedCursor />
      <LanguageSwitcher />
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        name={t.hero.name}
        title={t.hero.title}
        description={t.hero.description}
        ctaButtons={heroButtons}
      />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
