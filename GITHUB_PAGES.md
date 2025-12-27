# GitHub Pages ga Yuklash Qo'llanmasi

## ✅ Ha, loyiha GitHub Pages da to'liq ishlaydi!

Bu to'liq static web sayt - hech qanday server yoki backend kerak emas.

## 📤 GitHub ga Yuklash

### 1-usul: GitHub Web Interface orqali

1. **Yangi repository yarating:**
   - GitHub.com ga kiring
   - "New repository" tugmasini bosing
   - Repository nomini kiriting (masalan: `risk-baholash`)
   - "Public" ni tanlang
   - "Create repository" ni bosing

2. **Fayllarni yuklang:**
   - "uploading an existing file" tugmasini bosing
   - Barcha fayllarni tanlang va yuklang:
     - `index.html`
     - `css/` papkasi (ichida `styles.css`)
     - `js/` papkasi (ichida barcha .js fayllar)
     - `.nojekyll` fayli
     - `README.md` (ixtiyoriy)
   - "Commit changes" ni bosing

3. **GitHub Pages ni yoqish:**
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` (yoki `master`)
   - Folder: `/ (root)`
   - Save

4. **Saytni oching:**
   - Bir necha daqiqadan keyin sayt ochiladi
   - URL: `https://USERNAME.github.io/REPO-NAME/`

### 2-usul: Git Command Line orqali

```bash
# 1. Git ni o'rnatish kerak (agar yo'q bo'lsa)
# Windows: https://git-scm.com/download/win

# 2. Repository ni yarating GitHub da

# 3. Lokal papkada quyidagi buyruqlarni bajaring:

git init
git add .
git commit -m "Initial commit - Risk baholash platformasi"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

## ⚙️ GitHub Pages Sozlash

### Settings → Pages

1. **Source:**
   - "Deploy from a branch" ni tanlang
   - Branch: `main` (yoki `master`)
   - Folder: `/ (root)`

2. **Custom domain (ixtiyoriy):**
   - Agar o'z domeningiz bo'lsa, bu yerga kiriting

3. **Save** tugmasini bosing

## 🔍 Tekshirish

1. **URL ni oching:**
   - `https://USERNAME.github.io/REPO-NAME/`
   - Yoki Settings → Pages bo'limida ko'rsatilgan URL

2. **Sayt ishlayotganini tekshiring:**
   - Barcha bo'limlar ochilishi kerak
   - Interaktiv elementlar ishlashi kerak
   - Ma'lumotlar saqlanayotganini tekshiring (localStorage)

## ⚠️ Muhim Eslatmalar

### ✅ Ishlaydi:
- ✅ Barcha HTML, CSS, JS fayllar
- ✅ LocalStorage (ma'lumotlar saqlash)
- ✅ Interaktiv funksiyalar
- ✅ Responsive dizayn
- ✅ Font Awesome ikonkalar (CDN orqali)

### ❌ Kerak emas:
- ❌ Server
- ❌ Backend
- ❌ Database
- ❌ Node.js
- ❌ Build process

## 🐛 Muammolarni Hal Qilish

### Sayt ochilmayapti:
1. **Settings → Pages** da sozlamalarni tekshiring
2. Bir necha daqiqa kutib turing (deploy vaqt oladi)
3. Browser cache'ni tozalang (Ctrl+F5)

### CSS/JS yuklanmayapti:
1. Fayl yo'llarini tekshiring - ular nisbiy bo'lishi kerak
2. `.nojekyll` fayli mavjudligini tekshiring
3. GitHub Pages build loglarini ko'ring (Settings → Pages → View deployment)

### Ma'lumotlar saqlanmayapti:
- Bu normal - localStorage har bir brauzerda alohida
- Har bir foydalanuvchi o'z ma'lumotlarini ko'radi

## 📝 Repository Tavsiyalari

### README.md
- Loyiha haqida ma'lumot
- Qo'llanma
- Screenshot'lar (ixtiyoriy)

### .gitignore
- Keraksiz fayllarni ignore qilish
- `.nojekyll` ni ignore qilmaslik kerak!

### LICENSE
- Agar ochiq manba bo'lsa, LICENSE fayli qo'shing

## 🚀 Live Demo

Yuklaganingizdan keyin, sayt shu URL da ochiladi:
```
https://USERNAME.github.io/REPO-NAME/
```

Masalan:
```
https://username.github.io/risk-baholash/
```

## 💡 Maslahatlar

1. **Repository nomi:** Qisqa va tushunarli bo'lsin
2. **README.md:** Yaxshi yozilgan bo'lsin
3. **Commits:** Aniq va tushunarli commit xabarlari
4. **Branches:** Agar kerak bo'lsa, alohida branch'lar yarating

---

**Omad! 🎉**

