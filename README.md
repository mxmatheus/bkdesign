# 🌟 Neon Portfolio

Modern, interaktif ve çok dilli portfolio web sitesi. Dark tema, neon efektler ve glass morphism tasarımı ile Next.js 15 kullanılarak geliştirilmiştir.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Dark tema, neon efektler ve glass morphism
- 🌐 **Çok Dilli**: Türkçe ve İngilizce dil desteği
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- 🎭 **Animasyonlar**: Framer Motion ile akıcı animasyonlar
- 🎯 **3D Efektler**: React Three Fiber ile interaktif 3D avatar
- 📧 **İletişim Formu**: EmailJS entegrasyonu ile çalışan form
- ⚡ **Performans**: Next.js 15 ile optimize edilmiş
- ♿ **Erişilebilirlik**: WCAG AA standartlarına uygun
- 🎨 **Smooth Scroll**: Lenis ile pürüzsüz kaydırma

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18 veya üzeri
- npm veya yarn

### Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/kullaniciadi/neon-portfolio.git
cd neon-portfolio
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables ayarlayın:
```bash
cp .env.local.example .env.local
```

`.env.local` dosyasını düzenleyin ve EmailJS bilgilerinizi ekleyin:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Development server'ı başlatın:
```bash
npm run dev
```

5. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Kurulumu

İletişim formunun çalışması için EmailJS hesabı gereklidir:

1. [EmailJS](https://www.emailjs.com/) sitesine gidin ve ücretsiz hesap oluşturun
2. Email servisi ekleyin (Gmail, Outlook, vb.)
3. Email template oluşturun
4. Service ID, Template ID ve Public Key'i kopyalayın
5. `.env.local` dosyasına ekleyin

Detaylı kurulum için [EmailJS Documentation](https://www.emailjs.com/docs/) sayfasını ziyaret edin.

## 🎨 Özelleştirme

### Kişisel Bilgilerinizi Güncelleyin

1. **Sosyal Medya Linkleri**: `lib/constants.js` dosyasındaki `footerSocialLinks` bölümünü düzenleyin
2. **Dil Çevirileri**: `lib/i18n.js` dosyasındaki çevirileri güncelleyin
3. **Projeler**: `lib/constants.js` dosyasındaki `projects` dizisini kendi projelerinizle değiştirin
4. **Yetenekler**: `lib/constants.js` dosyasındaki `skills` dizisini düzenleyin
5. **Renkler**: `tailwind.config.js` dosyasındaki renk paletini özelleştirin

### Tema Renkleri

Neon renklerini değiştirmek için `tailwind.config.js` dosyasını düzenleyin:

```js
colors: {
  'neon-cyan': '#00ffff',    // Ana neon rengi
  'neon-magenta': '#ff0080', // İkincil neon rengi
}
```

## 📁 Proje Yapısı

```
neon-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Ana sayfa
│   └── globals.css        # Global stiller
├── components/
│   ├── sections/          # Sayfa bölümleri
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── ui/                # UI bileşenleri
│       ├── GlassCard.jsx
│       ├── NeonButton.jsx
│       ├── Avatar3D.jsx
│       ├── LanguageSwitcher.jsx
│       └── ...
├── lib/                   # Yardımcı fonksiyonlar
│   ├── constants.js       # Sabitler ve veriler
│   ├── i18n.js           # Dil çevirileri
│   └── animations.js      # Animasyon tanımları
├── hooks/                 # Custom React hooks
│   ├── useLanguage.js    # Dil yönetimi
│   └── useMediaQuery.js  # Responsive hooks
└── public/               # Statik dosyalar
```

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber, Drei
- **Smooth Scroll**: Lenis
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Icons**: Lucide React
- **State Management**: Zustand

## 🚀 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Environment variables ekleyin
4. Deploy edin!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Diğer Platformlar

- **Netlify**: `npm run build` komutu ile build alın
- **AWS Amplify**: Next.js desteği ile deploy edin
- **Railway**: Otomatik deployment

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request göndermekten çekinmeyin.

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📧 İletişim

Sorularınız için:
- Email: batuhan.koksal699@gmail.com
- GitHub: [@mxmatheus](https://github.com/batuhankilic)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [EmailJS](https://www.emailjs.com/)
- [Unsplash](https://unsplash.com/) - Placeholder görseller için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
