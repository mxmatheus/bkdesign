/**
 * Internationalization (i18n) Configuration
 * Supports Turkish and English languages
 */

export const languages = [
  {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  }
];

export const translations = {
  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      skills: 'Yetenekler',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    
    // Hero Section
    hero: {
      name: 'Batuhan Kılıç',
      title: 'Full Stack Developer',
      description: 'Modern web teknolojileri ile yaratıcı ve performanslı çözümler geliştiriyorum.',
      cta: {
        projects: 'Projeleri Gör',
        contact: 'İletişime Geç'
      }
    },
    
    // About Section
    about: {
      title: 'Hakkımda',
      paragraphs: [
        'Merhaba! Ben Batuhan, tutkulu bir full-stack developer\'ım. Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.',
        'React, Next.js, Node.js ve TypeScript gibi teknolojilerde uzmanlaşmış durumdayım. Her projede temiz kod, en iyi pratikler ve kullanıcı odaklı tasarım ilkelerini benimsiyorum.',
        'Sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum. Yeni teknolojileri keşfetmek ve karmaşık problemlere yaratıcı çözümler üretmek beni motive ediyor.'
      ]
    },
    
    // Skills Section
    skills: {
      title: 'Yetenekler',
      subtitle: 'Uzmanlaştığım teknolojiler ve araçlar'
    },
    
    // Projects Section
    projects: {
      title: 'Projeler',
      subtitle: 'Son çalışmalarım ve projelerim',
      viewDetails: 'Detayları Gör',
      liveDemo: 'Canlı Demo',
      sourceCode: 'Kaynak Kod',
      technologies: 'Teknolojiler',
      close: 'Kapat'
    },
    
    // Contact Section
    contact: {
      title: 'İletişime Geç',
      subtitle: 'Bir proje fikriniz mi var? Benimle iletişime geçin!',
      form: {
        name: 'Adınız',
        email: 'E-posta',
        message: 'Mesajınız',
        send: 'Mesaj Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        error: 'Bir hata oluştu. Lütfen tekrar deneyin.'
      },
      validation: {
        nameRequired: 'İsim gereklidir',
        nameMin: 'İsim en az 2 karakter olmalıdır',
        emailRequired: 'E-posta gereklidir',
        emailInvalid: 'Geçerli bir e-posta adresi giriniz',
        messageRequired: 'Mesaj gereklidir',
        messageMin: 'Mesaj en az 10 karakter olmalıdır'
      }
    },
    
    // Footer
    footer: {
      rights: 'Tüm hakları saklıdır',
      scrollTop: 'Yukarı çık'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      name: 'Batuhan Kılıç',
      title: 'Full Stack Developer',
      description: 'Creating creative and performant solutions with modern web technologies.',
      cta: {
        projects: 'View Projects',
        contact: 'Get In Touch'
      }
    },
    
    // About Section
    about: {
      title: 'About Me',
      paragraphs: [
        'Hello! I\'m Batuhan, a passionate full-stack developer. I build performant and scalable applications with modern web technologies, always keeping user experience at the forefront.',
        'I specialize in technologies like React, Next.js, Node.js, and TypeScript. In every project, I embrace clean code, best practices, and user-centric design principles.',
        'I believe in continuous learning and self-improvement. Exploring new technologies and creating creative solutions to complex problems motivates me.'
      ]
    },
    
    // Skills Section
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I specialize in'
    },
    
    // Projects Section
    projects: {
      title: 'Projects',
      subtitle: 'My recent work and projects',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      technologies: 'Technologies',
      close: 'Close'
    },
    
    // Contact Section
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project idea? Let\'s talk!',
      form: {
        name: 'Your Name',
        email: 'Email',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred. Please try again.'
      },
      validation: {
        nameRequired: 'Name is required',
        nameMin: 'Name must be at least 2 characters',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        messageRequired: 'Message is required',
        messageMin: 'Message must be at least 10 characters'
      }
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved',
      scrollTop: 'Scroll to top'
    }
  }
};

export const defaultLanguage = 'tr';
