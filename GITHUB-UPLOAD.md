# GitHub'a Yükleme Rehberi

## Adım 1: GitHub'da Repository Oluşturun

1. [GitHub](https://github.com) sitesine gidin
2. Sağ üstteki "+" butonuna tıklayın
3. "New repository" seçin
4. Repository bilgilerini doldurun:
   - **Repository name**: `neon-portfolio`
   - **Description**: "Modern portfolio website with Next.js 15, neon effects and glass morphism"
   - **Visibility**: Public veya Private
   - ⚠️ **README, .gitignore veya license eklemeyin** (zaten projede var)
5. "Create repository" butonuna tıklayın

## Adım 2: Remote Repository Ekleyin

GitHub'da repository oluşturduktan sonra, terminal/PowerShell'de şu komutları çalıştırın:

```bash
# Remote repository ekleyin (KULLANICI_ADINIZ yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/KULLANICI_ADINIZ/neon-portfolio.git

# Ana branch'i main olarak ayarlayın
git branch -M main

# Dosyaları GitHub'a yükleyin
git push -u origin main
```

## Adım 3: GitHub Kullanıcı Adı ve Token

Eğer GitHub kullanıcı adı ve şifre sorarsa:

- **Username**: GitHub kullanıcı adınız
- **Password**: Personal Access Token (PAT) kullanmanız gerekiyor

### Personal Access Token Oluşturma:

1. GitHub'da Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token" > "Generate new token (classic)"
3. Note: "Neon Portfolio Upload"
4. Expiration: 90 days (veya istediğiniz süre)
5. Scopes: `repo` seçeneğini işaretleyin
6. "Generate token" butonuna tıklayın
7. Token'ı kopyalayın (bir daha göremezsiniz!)
8. Password yerine bu token'ı kullanın

## Adım 4: Doğrulama

Yükleme başarılı olduysa:

```bash
# Remote repository'yi kontrol edin
git remote -v

# Son commit'i kontrol edin
git log --oneline -1
```

GitHub repository sayfanızı yenileyin, tüm dosyalar orada olmalı!

## Sonraki Güncellemeler İçin

Projeyi güncelledikten sonra:

```bash
git add .
git commit -m "feat: Yeni özellik eklendi"
git push
```

## Sorun Giderme

### "remote origin already exists" hatası:
```bash
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADINIZ/neon-portfolio.git
```

### "failed to push" hatası:
```bash
git pull origin main --rebase
git push -u origin main
```

### Authentication hatası:
- Personal Access Token kullandığınızdan emin olun
- Token'ın `repo` yetkisine sahip olduğunu kontrol edin

## Başarılı! 🎉

Projeniz artık GitHub'da! Repository URL'inizi paylaşabilir ve Vercel'e deploy edebilirsiniz.
