# 📖 Foydalanish Qo'llanmasi

## 🚀 Saytni Ochish

### 1-usul: To'g'ridan-to'g'ri ochish
- `index.html` faylini ikki marta bosing
- Brauzer avtomatik ochiladi

### 2-usul: Brauzer orqali
- Brauzeringizni oching (Chrome, Firefox, Edge, Safari)
- `File > Open` yoki `Ctrl+O` (Windows) / `Cmd+O` (Mac)
- `index.html` faylini tanlang

### 3-usul: Local Server (ixtiyoriy)
- VS Code Live Server extension ishlatishingiz mumkin
- Yoki Python: `python -m http.server 8000`
- Keyin `http://localhost:8000` ga kiring

---

## 🧭 Navigation (Navigatsiya)

Saytning yuqori qismida 4 ta bo'lim mavjud:

1. **Bosh sahifa** - Kirish va umumiy ma'lumot
2. **Galstuk-Babochka** - Sabab-ogibat tahlili
3. **Nosozliklar Daraxti** - Nosozliklar tahlili
4. **Risk Jadvali** - Risk baholash jadvali

**Mobil qurilmalarda:** Hamburger menyu (☰) orqali navigatsiyani oching.

---

## 📊 1. Galstuk-Babochka Usuli

### Maqsad
Xavfli hodisaning sabablarini va oqibatlarini tahlil qilish.

### Qadam-baqadam qo'llanma

#### 1-qadam: Markaziy hodisani kiriting
- Markaziy oq rangli qutiga bosing
- Hodisa nomini kiriting (masalan: "Ma'lumotlar o'g'irlanishi")
- Enter yoki boshqa joyga bosing

#### 2-qadam: Sabablar qo'shing
1. **"Sabab qo'shish"** tugmasini bosing
2. O'zgaruvchi oyna ochiladi
3. Sababni kiriting (masalan: "Parol zaif")
4. **OK** tugmasini bosing
5. Sabab chap tomonda ko'rinadi

**Misol sabablar:**
- Parol zaif
- Antivirus yo'q
- Xodimlar tayyorgarlikdan o'tmagan
- Tizim eskirgan

#### 3-qadam: Oqibatlar qo'shing
1. **"Oqibat qo'shish"** tugmasini bosing
2. O'zgaruvchi oyna ochiladi
3. Oqibatni kiriting (masalan: "Ma'lumotlar o'g'irlanishi")
4. **OK** tugmasini bosing
5. Oqibat o'ng tomonda ko'rinadi

**Misol oqibatlar:**
- Ma'lumotlar o'g'irlanishi
- Tizim ishlamay qolishi
- Moliyaviy yo'qotishlar
- Reputatsiya zarari

#### 4-qadam: Elementlarni boshqarish
Har bir sabab yoki oqibat elementida 2 ta tugma bor:

- **✏️ Tahrirlash** - Elementni o'zgartirish
- **❌ O'chirish** - Elementni olib tashlash

**Tahrirlash:**
1. Elementdagi **✏️** tugmasini bosing
2. Yangi matnni kiriting
3. **OK** tugmasini bosing

**O'chirish:**
1. Elementdagi **❌** tugmasini bosing
2. Tasdiqlash oynasida **OK** tugmasini bosing

#### 5-qadam: Ma'lumotlarni saqlash
- **"Saqlash"** tugmasini bosing
- Ma'lumotlar brauzerda saqlanadi
- Keyingi safar ochganingizda saqlangan bo'ladi

#### 6-qadam: Tozalash
- **"Tozalash"** tugmasini bosing
- Barcha sabab va oqibatlar o'chiriladi
- Ehtiyotkorlik bilan ishlating!

### Amaliy Misol

**Markaziy hodisa:** "Kiberhujum"

**Sabablar:**
- Zaif parollar
- Antivirus yo'q
- Xodimlar tayyorgarlikdan o'tmagan
- Tizim eskirgan

**Oqibatlar:**
- Ma'lumotlar o'g'irlanishi
- Tizim ishlamay qolishi
- Moliyaviy yo'qotishlar
- Reputatsiya zarari

---

## 🌳 2. Nosozliklar Daraxti Tahlili

### Maqsad
Yakuniy hodisaga olib keladigan sabablarni mantiqiy tahlil qilish.

### Qadam-baqadam qo'llanma

#### 1-qadam: Yakuniy hodisani kiriting
- Yuqoridagi qizil qutiga bosing
- Yakuniy hodisa nomini kiriting (masalan: "Tizim ishlamay qolishi")
- Enter yoki boshqa joyga bosing

#### 2-qadam: Mantiqiy elementlar qo'shing
1. **"Mantiqiy element qo'shish"** tugmasini bosing
2. O'zgaruvchi oyna ochiladi
3. **AND** yoki **OR** kiriting
4. **OK** tugmasini bosing

**Mantiqiy elementlar:**
- **AND** - Barcha shartlar bajarilishi kerak
- **OR** - Har qanday shart bajarilishi kifoya

#### 3-qadam: Voqealarni qo'shing
1. **"Voqea qo'shish"** tugmasini bosing
2. O'zgaruvchi oyna ochiladi
3. Voqea nomini kiriting (masalan: "Server nosozligi")
4. **OK** tugmasini bosing

**Misol voqealar:**
- Server nosozligi
- Quvvat uzilishi
- Tarmoq muammosi
- Dasturiy xato

#### 4-qadam: Ehtimollik kiriting
Har bir voqea elementida ehtimollik maydoni bor:

1. Voqea elementidagi **"Ehtimollik"** maydoniga bosing
2. 0 dan 1 gacha qiymat kiriting
   - **0.1** = 10% ehtimollik (past)
   - **0.5** = 50% ehtimollik (o'rta)
   - **0.9** = 90% ehtimollik (yuqori)
3. Enter tugmasini bosing

#### 5-qadam: Ehtimollikni hisoblash
1. Barcha voqealarga ehtimollik kiriting
2. **"Ehtimollikni hisoblash"** tugmasini bosing
3. Natijalar panelida ko'rinadi:
   - Yakuniy hodisa ehtimolligi
   - Har bir elementning ehtimolligi

**Hisoblash qoidalari:**
- **AND gate:** Ehtimolliklar ko'paytiriladi
  - Masalan: P(A) × P(B)
- **OR gate:** 1 - [(1-P(A)) × (1-P(B))]
  - Masalan: Agar P(A)=0.3 va P(B)=0.4 bo'lsa
  - P(A OR B) = 1 - [(1-0.3) × (1-0.4)] = 1 - [0.7 × 0.6] = 1 - 0.42 = 0.58

#### 6-qadam: Elementlarni boshqarish
Har bir elementda 2 ta tugma bor:

- **✏️ Tahrirlash** - Elementni o'zgartirish
- **❌ O'chirish** - Elementni olib tashlash

#### 7-qadam: Tozalash
- **"Tozalash"** tugmasini bosing
- Barcha elementlar o'chiriladi

### Amaliy Misol

**Yakuniy hodisa:** "Tizim ishlamay qolishi"

**Mantiqiy element:** AND

**Voqealar:**
- Server nosozligi (Ehtimollik: 0.2)
- Quvvat uzilishi (Ehtimollik: 0.1)

**Hisoblash:**
- AND: 0.2 × 0.1 = 0.02 (2% ehtimollik)

---

## 📋 3. Risk Jadvali Dashboard

### Maqsad
Tahdidlarni tahlil qilish, ranjirlash va statistikani ko'rish.

### Qadam-baqadam qo'llanma

#### 1-qadam: Yangi tahdid qo'shish
1. **"Yangi tahdid qo'shish"** tugmasini bosing
2. Modal oyna ochiladi

#### 2-qadam: Ma'lumotlarni kiriting

**Tahdid nomi:**
- Tahdid nomini kiriting (masalan: "Texnik nosozlik")

**Oqibatlari (1-5 shkala):**
- 1 = Juda past oqibat
- 2 = Past oqibat
- 3 = O'rta oqibat
- 4 = Yuqori oqibat
- 5 = Juda yuqori oqibat

**Ehtimollik (1-5 shkala):**
- 1 = Juda kam ehtimollik
- 2 = Kam ehtimollik
- 3 = O'rta ehtimollik
- 4 = Yuqori ehtimollik
- 5 = Juda yuqori ehtimollik

**Avtomatik hisoblanadi:**
- **Risk o'lchovi** = Oqibat × Ehtimollik
- **Ranjirlash** = Risk o'lchovi bo'yicha avtomatik

#### 3-qadam: Saqlash
1. Barcha maydonlarni to'ldiring
2. **"Saqlash"** tugmasini bosing
3. Tahdid jadvalga qo'shiladi

#### 4-qadam: Tahdidlarni boshqarish

**Tahrirlash:**
1. Jadvaldagi **✏️** tugmasini bosing
2. Modal oyna ochiladi
3. Ma'lumotlarni o'zgartiring
4. **"Saqlash"** tugmasini bosing

**O'chirish:**
1. Jadvaldagi **🗑️** tugmasini bosing
2. Tasdiqlash oynasida **OK** tugmasini bosing
3. Tahdid o'chiriladi

#### 5-qadam: Saralash
- **"Saralash"** tugmasini bosing
- Tahdidlar risk o'lchovi bo'yicha saralanadi
- Qayta bosib, teskari tartibga o'tkazish mumkin

#### 6-qadam: Eksport qilish
1. **"Eksport qilish"** tugmasini bosing
2. CSV fayl yuklab olinadi
3. Excel yoki boshqa dasturda ochish mumkin

#### 7-qadam: Statistikalarni ko'rish
Jadval ostida 3 ta statistik ko'rsatkich:

- **Jami tahdidlar** - Barcha tahdidlar soni
- **Yuqori risk** - Risk o'lchovi ≥ 15 bo'lgan tahdidlar
- **O'rtacha risk** - Barcha tahdidlarning o'rtacha risk o'lchovi

### Risk Darajalari

**Rangli ko'rsatkichlar:**
- 🔴 **Qizil** - Yuqori risk (≥ 15)
- 🟡 **Sariq** - O'rta risk (10-14)
- 🟢 **Yashil** - Past risk (< 10)

### Amaliy Misol

**Tahdid 1:**
- Nomi: "Texnik nosozlik"
- Oqibat: 5
- Ehtimollik: 2
- Risk o'lchovi: 10
- Ranjirlash: 2

**Tahdid 2:**
- Nomi: "Virus tushishi"
- Oqibat: 3
- Ehtimollik: 3
- Risk o'lchovi: 9
- Ranjirlash: 3

**Tahdid 3:**
- Nomi: "Ma'lumotlar o'g'irlanishi"
- Oqibat: 4
- Ehtimollik: 4
- Risk o'lchovi: 16
- Ranjirlash: 1 (eng yuqori risk)

---

## 💾 Ma'lumotlarni Saqlash

### Avtomatik saqlash
- Barcha ma'lumotlar **brauzer localStorage** da saqlanadi
- Saytni yopib qayta ochsangiz ham ma'lumotlar saqlanadi
- Har bir bo'lim alohida saqlanadi

### Ma'lumotlarni tozalash
Agar barcha ma'lumotlarni o'chirmoqchi bo'lsangiz:

1. Brauzer Developer Tools ni oching (F12)
2. **Application** yoki **Storage** bo'limiga o'ting
3. **Local Storage** ni kengaytiring
4. `butterfly-diagram`, `fault-tree`, `risk-table` ni o'chiring
5. Saytni yangilang

---

## 🎨 Ko'rsatkichlar va Ranglar

### Risk Jadvalida

**Risk o'lchovi:**
- **0-9** = 🟢 Past risk (Yashil)
- **10-14** = 🟡 O'rta risk (Sariq)
- **15+** = 🔴 Yuqori risk (Qizil)

### Navigation
- **Faol bo'lim** - Oq fon bilan ko'rsatiladi
- **Scroll** - Smooth scrolling bilan bo'limlarga o'tish

---

## 📱 Mobil Qurilmalarda Ishlatish

### Navigation
- Hamburger menyu (☰) orqali navigatsiyani oching
- Bo'limlar ro'yxati ko'rinadi
- Bo'limni tanlang

### Interaktiv elementlar
- Barcha tugmalar va maydonlar mobil uchun optimallashtirilgan
- Touch gestures qo'llab-quvvatlanadi
- Responsive dizayn

---

## ⚠️ Muammolarni Hal Qilish

### Ma'lumotlar saqlanmayapti
**Sabab:**
- Private/Incognito rejimda localStorage ishlamasligi mumkin
- Brauzer localStorage ni o'chirib qo'ygan bo'lishi mumkin

**Yechim:**
- Oddiy brauzer rejimida ishlating
- Brauzer sozlamalarida localStorage yoqilganligini tekshiring

### Diagrammalar ko'rinmayapti
**Sabab:**
- JavaScript o'chirilgan bo'lishi mumkin
- Brauzer eski versiya bo'lishi mumkin

**Yechim:**
- JavaScript yoqing (brauzer sozlamalarida)
- Brauzerni yangilang
- F12 (Developer Tools) da xatolarni tekshiring

### Stil ko'rinmayapti
**Sabab:**
- CSS fayl yuklanmagan
- Fayl yo'li noto'g'ri

**Yechim:**
- Barcha fayllar bir papkada ekanligini tekshiring
- `css/styles.css` fayli mavjudligini tekshiring
- Brauzer cache'ini tozalang (Ctrl+F5)

### Tugmalar ishlamayapti
**Sabab:**
- JavaScript xatoliklar
- Fayl yuklanmagan

**Yechim:**
- F12 (Developer Tools) ni oching
- **Console** bo'limida xatolarni ko'ring
- Saytni yangilang (F5)

---

## 💡 Maslahatlar

### Eng yaxshi natija olish uchun:

1. **Bosqichma-bosqich ishlang**
   - Avval markaziy hodisani kiriting
   - Keyin sabablar, keyin oqibatlar

2. **Aniq va qisqa nomlar ishlating**
   - "Zaif parol" ✅
   - "Parol juda zaif va murakkab emas" ❌

3. **Muntazam saqlang**
   - Ma'lumotlar avtomatik saqlanadi, lekin "Saqlash" tugmasini ham bosing

4. **Eksport qiling**
   - Risk jadvalini CSV formatida saqlang
   - Backup sifatida foydalaning

5. **Statistikani kuzating**
   - Risk jadvalida statistikani tekshiring
   - Yuqori riskli tahdidlarga e'tibor bering

---

## 📞 Qo'shimcha Yordam

Agar muammo yuzaga kelsa:

1. **Brauzer konsolini tekshiring** (F12 > Console)
2. **Saytni yangilang** (F5 yoki Ctrl+R)
3. **Cache'ni tozalang** (Ctrl+F5)
4. **Boshqa brauzerda sinab ko'ring**

---

## 🎓 O'rganish Maslahatlari

### Talabalar uchun:

1. **Amaliy misollar bilan ishlang**
   - Haqiqiy hayotdan misollar kiritng
   - O'zingizning tajribangizdan foydalaning

2. **Tahlil qiling**
   - Har bir tahdidni batafsil tahlil qiling
   - Sabab-ogibat bog'liqliklarini aniqlang

3. **Natijalarni taqqoslang**
   - Turli usullar natijalarini solishtiring
   - Xulosa chiqaring

4. **Guruh ishi**
   - Bir necha talabalar birga ishlashlari mumkin
   - Har biri o'z bo'limini tahlil qiladi

---

**Omad va qulay o'rganish tilaymiz! 🚀**

