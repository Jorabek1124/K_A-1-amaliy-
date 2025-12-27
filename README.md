# Risklarni Baholash - Interaktiv Ta'lim Platformasi

Zamonaviy va interaktiv usullar yordamida xavflarni tahlil qilish va baholash uchun static web sayt.

## 📋 Mavzular

1. **Galstuk-Babochka Usuli** - Sababdan oqibatgacha xavfli hodisani rivojlanish yo'llarini tahlil qilish
2. **Nosozliklar Daraxti Tahlili** - Nomaqbul hodisaga olib keladigan omillarni aniqlash
3. **Risk Jadvali Dashboard** - Tahdidlarni oqibatlar, ehtimollik va risk o'lchovi bo'yicha tahlil qilish

## 🚀 O'rnatish va Ishlatish

### GitHub Pages da Ishlatish (Tavsiya etiladi)

1. **GitHub ga yuklash:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```

2. **GitHub Pages ni yoqish:**
   - GitHub repository ga kiring
   - Settings → Pages
   - Source: "Deploy from a branch" → "main" → "/ (root)"
   - Save

3. **Saytni ochish:**
   - Bir necha daqiqadan keyin sayt `https://USERNAME.github.io/REPO-NAME/` da ochiladi

### Lokalda Ishlatish

### Talablar
- Hech qanday server yoki backend kerak emas!
- Faqat zamonaviy web brauzer (Chrome, Firefox, Edge, Safari)

### Qadamlar

1. **Fayllarni yuklab oling**
   - Barcha fayllar bir papkada bo'lishi kerak

2. **Brauzerda oching**
   - `index.html` faylini ikki marta bosib oching
   - Yoki brauzerda `File > Open` orqali oching

3. **Ishlatish**
   - Navigation orqali turli bo'limlarga o'ting
   - Interaktiv elementlar bilan ishlang

## 📁 Fayl Strukturasi

```
K_A/
├── index.html              # Asosiy HTML fayl
├── css/
│   └── styles.css         # Barcha stillar
├── js/
│   ├── main.js            # Asosiy logika va navigation
│   ├── butterfly.js       # Galstuk-Babochka diagrammasi
│   ├── fault-tree.js      # Nosozliklar daraxti
│   └── risk-table.js      # Risk jadvali dashboard
└── README.md              # Qo'llanma
```

## 🎯 Funksiyalar

### 1. Galstuk-Babochka Diagrammasi

- ✅ Markaziy hodisani kiriting/tahrirlang
- ✅ Sabablar qo'shing, tahrirlang, o'chiring
- ✅ Oqibatlar qo'shing, tahrirlang, o'chiring
- ✅ Ma'lumotlar avtomatik saqlanadi (localStorage)

**Qanday ishlatish:**
1. "Sabab qo'shish" tugmasini bosing
2. Sababni kiriting
3. Xuddi shunday oqibatlar qo'shing
4. Har bir elementni bosib tahrirlash yoki o'chirish mumkin

### 2. Nosozliklar Daraxti

- ✅ Yakuniy hodisani kiriting
- ✅ Mantiqiy elementlar qo'shing (AND, OR)
- ✅ Voqealarni qo'shing
- ✅ Ehtimolliklarni kiriting va hisoblang
- ✅ Ma'lumotlar avtomatik saqlanadi

**Qanday ishlatish:**
1. "Mantiqiy element qo'shish" - AND yoki OR kiriting
2. "Voqea qo'shish" - dastlabki voqealarni qo'shing
3. Har bir voqeaga ehtimollik kiriting (0-1 orasida)
4. "Ehtimollikni hisoblash" tugmasini bosing

### 3. Risk Jadvali Dashboard

- ✅ Yangi tahdidlar qo'shing
- ✅ Oqibat va ehtimollikni kiriting (1-5 shkala)
- ✅ Risk o'lchovi avtomatik hisoblanadi
- ✅ Tahdidlar avtomatik ranjirlanadi
- ✅ Statistikalar ko'rsatiladi
- ✅ CSV formatida eksport qilish
- ✅ Ma'lumotlar avtomatik saqlanadi

**Qanday ishlatish:**
1. "Yangi tahdid qo'shish" tugmasini bosing
2. Tahdid nomi, oqibat (1-5), ehtimollik (1-5) kiriting
3. Risk o'lchovi va ranjirlash avtomatik hisoblanadi
4. Tahdidlarni tahrirlash yoki o'chirish mumkin
5. "Eksport qilish" orqali CSV fayl yuklab oling

## 💾 Ma'lumotlarni Saqlash

Barcha ma'lumotlar brauzerning **localStorage** da saqlanadi:
- Saytni yopib qayta ochsangiz ham ma'lumotlar saqlanadi
- Har bir bo'lim alohida saqlanadi
- Ma'lumotlarni tozalash uchun brauzer cache'ini tozalang

## 🎨 Dizayn Xususiyatlari

- ✅ Zamonaviy va chiroyli dizayn
- ✅ Responsive (mobil, planshet, kompyuter)
- ✅ Smooth animations
- ✅ Color-coded risk levels
- ✅ Interactive elements
- ✅ User-friendly interface

## 📱 Responsive Dizayn

Sayt barcha qurilmalarda yaxshi ishlaydi:
- 📱 Mobil telefonlar
- 📱 Planshetlar
- 💻 Noutbuklar
- 🖥️ Kompyuterlar

## 🔧 Texnologiyalar

- **HTML5** - Struktura
- **CSS3** - Dizayn va animatsiyalar
- **Vanilla JavaScript** - Interaktivlik
- **LocalStorage API** - Ma'lumotlarni saqlash
- **Font Awesome** - Ikonkalar

## 📚 Qo'shimcha Ma'lumot

### Risk O'lchovi Hisoblash
```
Risk o'lchovi = Oqibat × Ehtimollik
```

### Ranjirlash
- Yuqori risk o'lchovi = Pastroq raqam (1, 2, 3...)
- Risk o'lchovi bo'yicha avtomatik saralanadi

### Ehtimollik Hisoblash (Nosozliklar Daraxti)
- **AND gate**: P(A AND B) = P(A) × P(B)
- **OR gate**: P(A OR B) = 1 - [(1-P(A)) × (1-P(B))]

## 🐛 Muammolarni Hal Qilish

**Ma'lumotlar saqlanmayapti:**
- Brauzer localStorage ni qo'llab-quvvatlayotganini tekshiring
- Private/Incognito rejimda localStorage ishlamasligi mumkin

**Diagrammalar ko'rinmayapti:**
- JavaScript yoqilganligini tekshiring
- Brauzer konsolida xatolarni tekshiring (F12)

**Stil ko'rinmayapti:**
- Barcha fayllar bir papkada ekanligini tekshiring
- CSS fayl yuklanganligini tekshiring

## 📝 Versiya

**v1.0.0** - Birinchi versiya
- Asosiy funksiyalar
- 3 ta interaktiv bo'lim
- Responsive dizayn
- LocalStorage integratsiyasi

## 👨‍💻 Rivojlantirish

Agar o'zgarishlar kiritmoqchi bo'lsangiz:
1. HTML, CSS, JS fayllarini tahrirlang
2. Brauzerda yangilab ko'ring
3. F12 (Developer Tools) orqali xatolarni tekshiring

## 📄 Litsenziya

Bu loyiha ta'lim maqsadida yaratilgan.

## 🙏 Minnatdorchilik

Masofaviy ta'lim olayotgan talabalar uchun zamonaviy va interaktiv usullar yordamida mavzuni o'rganish imkoniyatini berish maqsadida yaratilgan.

---

**Qulay o'rganish tilaymiz! 🎓**

