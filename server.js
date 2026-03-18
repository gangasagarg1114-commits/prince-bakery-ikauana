const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

// ── IN-MEMORY DATABASE (replace with MongoDB in production) ──────────────────
let db = {
  orders: [
    { id: 1, name: "Priya Sharma", phone: "9876543210", email: "priya@gmail.com", item: "Black Forest Cake 1kg", date: "2026-03-18", message: "Happy Birthday written", status: "Delivered", total: 849, createdAt: "2026-03-15T10:00:00Z" },
    { id: 2, name: "Rahul Gupta", phone: "9812345678", email: "rahul@gmail.com", item: "Custom Party Cake 2kg", date: "2026-03-20", message: "Anniversary special", status: "Preparing", total: 1599, createdAt: "2026-03-17T14:30:00Z" },
    { id: 3, name: "Sunita Devi", phone: "9856781234", email: "", item: "Pastry Box x12", date: "2026-03-18", message: "", status: "New", total: 480, createdAt: "2026-03-18T09:15:00Z" },
    { id: 4, name: "Amit Kumar", phone: "9709876543", email: "amit@gmail.com", item: "Chocolate Truffle Cake 500g", date: "2026-03-19", message: "Extra chocolate please", status: "Confirmed", total: 499, createdAt: "2026-03-18T11:00:00Z" },
  ],
  contacts: [
    { id: 1, name: "Vikram Singh", phone: "9823456701", email: "vikram@gmail.com", message: "Kya aap wedding cake bana sakte ho 5kg?", createdAt: "2026-03-16T08:00:00Z", read: true },
    { id: 2, name: "Kavita Mishra", phone: "9812309876", email: "", message: "Birthday cake price kya hai 1kg ka?", createdAt: "2026-03-18T07:30:00Z", read: false },
  ],
  products: [
    { id: 1, name: "Black Forest Cake", category: "Cakes", price: 849, unit: "1kg", description: "Rich chocolate sponge, whipped cream, cherries. Bestseller!", emoji: "🎂", badge: "Bestseller", available: true },
    { id: 2, name: "Strawberry Dream Cake", category: "Cakes", price: 749, unit: "1kg", description: "Fresh strawberries, vanilla cream, sponge base.", emoji: "🍓", badge: "New", available: true },
    { id: 3, name: "Choco Truffle Cake", category: "Cakes", price: 999, unit: "1kg", description: "Dark Belgian chocolate ganache, premium truffle filling.", emoji: "🍫", badge: "Premium", available: true },
    { id: 4, name: "Pineapple Cake", category: "Cakes", price: 649, unit: "1kg", description: "Classic pineapple cream cake, light & refreshing.", emoji: "🍍", badge: "", available: true },
    { id: 5, name: "Red Velvet Cake", category: "Cakes", price: 899, unit: "1kg", description: "Velvety red sponge with cream cheese frosting.", emoji: "❤️", badge: "Loved", available: true },
    { id: 6, name: "Party Cake 3-Tier", category: "Cakes", price: 2999, unit: "3kg", description: "Custom 3-tier party cake, 30+ guests. Personalized design.", emoji: "🎉", badge: "Custom", available: true },
    { id: 7, name: "Butter Croissant", category: "Pastries", price: 89, unit: "piece", description: "Flaky, golden, hand-rolled butter pastry.", emoji: "🥐", badge: "", available: true },
    { id: 8, name: "Cream Puff", category: "Pastries", price: 79, unit: "piece", description: "Light choux with vanilla cream.", emoji: "🧁", badge: "", available: true },
    { id: 9, name: "Choco Chip Cookies", category: "Cookies", price: 249, unit: "box/12", description: "Chewy classic cookies loaded with chocolate.", emoji: "🍪", badge: "Popular", available: true },
    { id: 10, name: "French Macarons", category: "Cookies", price: 449, unit: "box/6", description: "Assorted flavour French macarons.", emoji: "🌈", badge: "Premium", available: true },
    { id: 11, name: "Multigrain Bread", category: "Breads", price: 149, unit: "loaf", description: "Seeds & 7-grain wholesome bread.", emoji: "🍞", badge: "Healthy", available: true },
    { id: 12, name: "Garlic Focaccia", category: "Breads", price: 199, unit: "piece", description: "Italian herb bread with roasted garlic.", emoji: "🫓", badge: "", available: true },
    { id: 13, name: "Margherita Pizza", category: "Pizza", price: 349, unit: "9 inch", description: "Fresh mozzarella, tomato base, basil.", emoji: "🍕", badge: "Popular", available: true },
    { id: 14, name: "BBQ Chicken Pizza", category: "Pizza", price: 449, unit: "9 inch", description: "Smoky BBQ, grilled chicken, onion.", emoji: "🍕", badge: "Bestseller", available: true },
    { id: 15, name: "Truffle Choc Box", category: "Chocolates", price: 599, unit: "box/12", description: "Handcrafted Belgian chocolate truffles.", emoji: "🍫", badge: "Gift", available: true },
    { id: 16, name: "Cupcake Tower 24", category: "Party Items", price: 1499, unit: "set", description: "24 decorated cupcakes on display stand.", emoji: "🧁", badge: "Event", available: true },
  ],
  reviews: [
    { id: 1, name: "Priya Sharma", city: "Ikauna", rating: 5, text: "Prince Bakery ka Black Forest Cake absolutely amazing hai! Birthday par sabne bahut tarif ki. Fresh ingredients aur beautiful decoration. 100% recommend!", avatar: "PS", date: "Mar 2026" },
    { id: 2, name: "Rahul Gupta", city: "Lucknow", rating: 5, text: "Order kiya aur 2 ghante mein delivery! Taste ekdum ghar jaisa. Chocolate truffle cake ne dil jeet liya. Prince Bakery zindabad! 🎂", avatar: "RG", date: "Feb 2026" },
    { id: 3, name: "Sunita Devi", city: "Ikauna", rating: 5, text: "Hamari beti ki shaadi ke liye custom cake order kiya tha — 5kg beautiful 3-tier cake. Bilkul waisi bani jo humne design batayi thi. Bahut shukriya!", avatar: "SD", date: "Jan 2026" },
    { id: 4, name: "Vikram Singh", city: "Bahraich", rating: 4, text: "Party ke liye pizza aur pastry order ki. Fresh, tasty, on-time delivery. Croissant toh bahut hi crispy aur flaky tha. Will order again!", avatar: "VS", date: "Mar 2026" },
  ],
  settings: {
    businessName: "प्रिंस बेकरी",
    tagline: "Freshly Baked Happiness Everyday",
    phone: "08707050016",
    whatsapp: "918707050016",
    email: "princebakery.ikauna@gmail.com",
    address: "Prince Lassi, Purani Sabji Mandi, Ikauna, Uttar Pradesh 271845",
    youtube: "https://youtube.com/channel/UCG-YEQ9FwfbpdKU5-Um8gSQ",
    openHours: "Mon–Sat 7AM–9PM | Sun 8AM–8PM",
    offerBanner: "🎉 इस महीने कस्टम केक पर 15% की छूट! Call करें: 08707050016",
  }
};

let nextOrderId = 5;
let nextContactId = 3;

// ── HELPERS ──────────────────────────────────────────────────────────────────
const success = (res, data, msg = "OK") => res.json({ success: true, message: msg, data });
const error = (res, msg, code = 400) => res.status(code).json({ success: false, message: msg });

// ── PUBLIC APIS ───────────────────────────────────────────────────────────────

// Products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  let products = db.products.filter(p => p.available);
  if (category && category !== 'All') products = products.filter(p => p.category === category);
  success(res, products);
});

app.get('/api/products/categories', (req, res) => {
  const cats = ['All', ...new Set(db.products.map(p => p.category))];
  success(res, cats);
});

// Reviews
app.get('/api/reviews', (req, res) => success(res, db.reviews));

// Settings (public)
app.get('/api/settings', (req, res) => success(res, db.settings));

// Place Order
app.post('/api/orders', (req, res) => {
  const { name, phone, email, item, date, message, total } = req.body;
  if (!name || !phone || !item || !date) return error(res, 'Name, phone, item aur date required hai');
  const order = {
    id: nextOrderId++,
    name, phone, email: email || '',
    item, date, message: message || '',
    status: 'New',
    total: total || 0,
    createdAt: new Date().toISOString()
  };
  db.orders.unshift(order);
  success(res, order, 'Order successfully place ho gaya! Hum aapko jald contact karenge. 🎂');
});

// Contact Message
app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body;
  if (!name || !phone || !message) return error(res, 'Name, phone aur message required hai');
  const contact = {
    id: nextContactId++,
    name, phone, email: email || '', message,
    createdAt: new Date().toISOString(),
    read: false
  };
  db.contacts.unshift(contact);
  success(res, contact, 'Message send ho gaya! Hum 24 ghante mein contact karenge. 😊');
});

// ── ADMIN APIs ────────────────────────────────────────────────────────────────
// Simple token auth (replace with JWT in production)
const ADMIN_TOKEN = 'prince-admin-2026';
const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) return error(res, 'Unauthorized', 401);
  next();
};

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'prince123') {
    success(res, { token: ADMIN_TOKEN, name: 'Prince Bakery Admin' }, 'Login successful!');
  } else {
    error(res, 'Invalid credentials. Try admin / prince123', 401);
  }
});

app.get('/api/admin/orders', adminAuth, (req, res) => success(res, db.orders));
app.get('/api/admin/contacts', adminAuth, (req, res) => success(res, db.contacts));
app.get('/api/admin/products', adminAuth, (req, res) => success(res, db.products));
app.get('/api/admin/settings', adminAuth, (req, res) => success(res, db.settings));

app.get('/api/admin/stats', adminAuth, (req, res) => {
  const stats = {
    totalOrders: db.orders.length,
    newOrders: db.orders.filter(o => o.status === 'New').length,
    revenue: db.orders.reduce((s, o) => s + (o.total || 0), 0),
    unreadMessages: db.contacts.filter(c => !c.read).length,
    totalProducts: db.products.length,
    totalReviews: db.reviews.length,
    recentOrders: db.orders.slice(0, 5),
    ordersByStatus: {
      New: db.orders.filter(o => o.status === 'New').length,
      Confirmed: db.orders.filter(o => o.status === 'Confirmed').length,
      Preparing: db.orders.filter(o => o.status === 'Preparing').length,
      Delivered: db.orders.filter(o => o.status === 'Delivered').length,
    }
  };
  success(res, stats);
});

app.patch('/api/admin/orders/:id', adminAuth, (req, res) => {
  const order = db.orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return error(res, 'Order not found', 404);
  Object.assign(order, req.body);
  success(res, order, 'Order updated!');
});

app.delete('/api/admin/orders/:id', adminAuth, (req, res) => {
  db.orders = db.orders.filter(o => o.id !== parseInt(req.params.id));
  success(res, null, 'Order deleted!');
});

app.post('/api/admin/products', adminAuth, (req, res) => {
  const product = { id: Date.now(), ...req.body, available: true };
  db.products.push(product);
  success(res, product, 'Product added!');
});

app.patch('/api/admin/products/:id', adminAuth, (req, res) => {
  const product = db.products.find(p => p.id === parseInt(req.params.id));
  if (!product) return error(res, 'Product not found', 404);
  Object.assign(product, req.body);
  success(res, product, 'Product updated!');
});

app.delete('/api/admin/products/:id', adminAuth, (req, res) => {
  db.products = db.products.filter(p => p.id !== parseInt(req.params.id));
  success(res, null, 'Product deleted!');
});

app.patch('/api/admin/contacts/:id/read', adminAuth, (req, res) => {
  const contact = db.contacts.find(c => c.id === parseInt(req.params.id));
  if (contact) contact.read = true;
  success(res, contact, 'Marked as read');
});

app.patch('/api/admin/settings', adminAuth, (req, res) => {
  Object.assign(db.settings, req.body);
  success(res, db.settings, 'Settings saved!');
});

app.post('/api/admin/reviews', adminAuth, (req, res) => {
  const review = { id: Date.now(), ...req.body };
  db.reviews.push(review);
  success(res, review, 'Review added!');
});

app.delete('/api/admin/reviews/:id', adminAuth, (req, res) => {
  db.reviews = db.reviews.filter(r => r.id !== parseInt(req.params.id));
  success(res, null, 'Review deleted!');
});

// ── SERVE FRONTEND ────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🎂 Prince Bakery server running on http://localhost:${PORT}`));
module.exports = app;
