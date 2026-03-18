# 🎂 प्रिंस बेकरी — Complete Full-Stack Website

**Prince Bakery, Ikauna, Uttar Pradesh 271845**  
Phone: 08707050016 | WhatsApp: +91-8707050016

---

## 🚀 Quick Start (Local Development)

### Step 1 — Install Node.js
Download from https://nodejs.org (v18+ recommended)

### Step 2 — Install Dependencies
```bash
npm install
```

### Step 3 — Start Server
```bash
npm start
```
Open http://localhost:3000 in your browser ✅

---

## 📁 Project Structure

```
prince-bakery/
├── backend/
│   └── server.js          ← Node.js + Express API
├── frontend/
│   └── public/
│       └── index.html     ← Complete website + admin panel
├── package.json
└── README.md
```

---

## 🌐 Public Website Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | / | Hero, featured products, reviews, CTA |
| Menu | #menu | Full product catalog with filter & search |
| Gallery | #gallery | Cake designs & party items showcase |
| About | #about | Story, mission, vision, services |
| Contact | #contact | Phone, WhatsApp, Google Maps, contact form |

---

## ⚙️ Admin Dashboard

**URL:** Click ⚙ Admin in navigation  
**Login:** admin / prince123

### Admin Features:
- 📊 **Dashboard** — Revenue, orders, stats, charts
- 📋 **Orders** — View all orders, update status, call/WhatsApp customer
- 🛒 **Products** — Add/edit/delete products, show/hide items
- 💌 **Messages** — Customer queries with quick reply
- ⭐ **Reviews** — Add/delete customer reviews
- ⚙️ **Settings** — Update phone, tagline, offer banner, hours

---

## 📱 Key Features

### Customer Features
- ✅ Online cake booking with WhatsApp auto-message
- ✅ Category filter (Cakes, Pastries, Pizza, Chocolates, etc.)
- ✅ Dark/Light theme toggle
- ✅ Mobile responsive (works on all devices)
- ✅ WhatsApp floating button
- ✅ Contact form
- ✅ SEO optimized meta tags

### Business Features  
- ✅ Order management system
- ✅ Product catalog management
- ✅ Customer message inbox
- ✅ Review management
- ✅ Offer banner (editable from admin)
- ✅ Real-time status updates

---

## 🌍 Deployment (Free Hosting)

### Option 1: Render.com (Recommended — Free)
1. Push to GitHub: `git init && git add . && git commit -m "Prince Bakery"`
2. Go to https://render.com → New Web Service
3. Connect GitHub repo
4. Build command: `npm install`
5. Start command: `npm start`
6. Your site: `https://prince-bakery.onrender.com` ✅

### Option 2: Railway.app
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Auto-detects Node.js, deploys automatically

### Option 3: VPS / Hostinger
```bash
# Upload files, then:
npm install
npm install -g pm2
pm2 start backend/server.js --name "prince-bakery"
pm2 save
```

---

## 🗄️ Database (Production Upgrade)

Current: In-memory (data resets on restart)  
For production, switch to MongoDB:

```bash
npm install mongoose
```

Replace in-memory `db` in server.js with MongoDB models.  
Free MongoDB: https://mongodb.com/atlas

---

## 📞 Contact Info in Code

Update these in `frontend/public/index.html`:
- Phone: `08707050016`
- WhatsApp: `918707050016`  
- Address: `Prince Lassi, Purani Sabji Mandi, Ikauna, UP 271845`
- YouTube: `https://youtube.com/channel/UCG-YEQ9FwfbpdKU5-Um8gSQ`

---

## 🔒 Security Notes

For production, update in `backend/server.js`:
- Change admin password (currently `prince123`)
- Add JWT tokens instead of simple token
- Add rate limiting: `npm install express-rate-limit`
- Use HTTPS (automatic on Render/Railway)

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",    ← Web server
  "cors": "^2.8.5"         ← Cross-origin requests
}
```

---

**Made with ❤️ for Prince Bakery, Ikauna UP**  
*Freshly Baked Happiness Everyday* 🎂
