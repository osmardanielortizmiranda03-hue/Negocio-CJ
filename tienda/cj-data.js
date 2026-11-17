/* CJ — datos compartidos entre la tienda y el panel administrativo.
   Prototipo: todo se guarda en el navegador (localStorage). */
(function () {
  const SEED_PRODUCTS = [
 {
  "id": "p1",
  "name": "Polo negro",
  "category": "Polos",
  "price": 60000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 3
   },
   {
    "size": "M",
    "stock": 0
   },
   {
    "size": "L",
    "stock": 1
   },
   {
    "size": "XL",
    "stock": 3
   }
  ],
  "image": "",
  "description": "",
  "featured": true,
  "active": true
 },
 {
  "id": "p2",
  "name": "Polo Blanco",
  "category": "Polos",
  "price": 60000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 2
   },
   {
    "size": "M",
    "stock": 5
   },
   {
    "size": "L",
    "stock": 0
   },
   {
    "size": "XL",
    "stock": 5
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p3",
  "name": "Set Rojo",
  "category": "Conjuntos",
  "price": 100000,
  "cost": 25000,
  "sizes": [
   {
    "size": "M",
    "stock": 1
   },
   {
    "size": "L",
    "stock": 1
   },
   {
    "size": "XL",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": true,
  "active": true
 },
 {
  "id": "p4",
  "name": "Camisa + Pantalón",
  "category": "Conjuntos",
  "price": 100000,
  "cost": 47900,
  "sizes": [
   {
    "size": "M",
    "stock": 0
   },
   {
    "size": "L",
    "stock": 2
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p5",
  "name": "Set Beige",
  "category": "Conjuntos",
  "price": 100000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 0
   },
   {
    "size": "L",
    "stock": 2
   },
   {
    "size": "XL",
    "stock": 2
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p6",
  "name": "Set corto negro",
  "category": "Sets cortos",
  "price": 85000,
  "cost": 30000,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 1
   },
   {
    "size": "L",
    "stock": 1
   },
   {
    "size": "XL",
    "stock": 0
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p7",
  "name": "Set Negro",
  "category": "Conjuntos",
  "price": 100000,
  "cost": 25000,
  "sizes": [
   {
    "size": "M",
    "stock": 1
   },
   {
    "size": "L",
    "stock": 2
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p8",
  "name": "Set corto Beige",
  "category": "Sets cortos",
  "price": 85000,
  "cost": 30000,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 0
   },
   {
    "size": "L",
    "stock": 2
   },
   {
    "size": "XL",
    "stock": 0
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p9",
  "name": "Set Blanco",
  "category": "Conjuntos",
  "price": 100000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 2
   },
   {
    "size": "M",
    "stock": 3
   },
   {
    "size": "L",
    "stock": 2
   },
   {
    "size": "XL",
    "stock": 3
   }
  ],
  "image": "",
  "description": "",
  "featured": true,
  "active": true
 },
 {
  "id": "p10",
  "name": "Urbano Fit",
  "category": "Conjuntos",
  "price": 85000,
  "cost": 35000,
  "sizes": [
   {
    "size": "S",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p11",
  "name": "Set corto Blanco + Beige",
  "category": "Sets cortos",
  "price": 85000,
  "cost": 28373,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 3
   },
   {
    "size": "L",
    "stock": 3
   },
   {
    "size": "XL",
    "stock": 2
   },
   {
    "size": "XXL",
    "stock": 3
   }
  ],
  "image": "",
  "description": "",
  "featured": true,
  "active": true
 },
 {
  "id": "p12",
  "name": "Polo albaricoque",
  "category": "Polos",
  "price": 55000,
  "cost": 16000,
  "sizes": [
   {
    "size": "L",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p13",
  "name": "Pantalón caqui",
  "category": "Pantalones",
  "price": 60000,
  "cost": 31000,
  "sizes": [
   {
    "size": "28",
    "stock": 0
   },
   {
    "size": "30",
    "stock": 0
   },
   {
    "size": "31",
    "stock": 0
   },
   {
    "size": "32",
    "stock": 0
   },
   {
    "size": "34",
    "stock": 0
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p14",
  "name": "Camisetas negro",
  "category": "Camisetas",
  "price": 60000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 2
   },
   {
    "size": "M",
    "stock": 2
   },
   {
    "size": "L",
    "stock": 3
   },
   {
    "size": "XL",
    "stock": 2
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p15",
  "name": "Camiseta Gris",
  "category": "Camisetas",
  "price": 60000,
  "cost": 20000,
  "sizes": [
   {
    "size": "M",
    "stock": 2
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p16",
  "name": "Pantalones Blancos",
  "category": "Pantalones",
  "price": 60000,
  "cost": 27978,
  "sizes": [
   {
    "size": "30",
    "stock": 1
   },
   {
    "size": "31",
    "stock": 1
   },
   {
    "size": "32",
    "stock": 1
   },
   {
    "size": "34",
    "stock": 1
   },
   {
    "size": "36",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p17",
  "name": "Camisetas Azul oscuro",
  "category": "Camisetas",
  "price": 60000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 2
   },
   {
    "size": "L",
    "stock": 2
   },
   {
    "size": "XL",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p18",
  "name": "Pantalón negro",
  "category": "Pantalones",
  "price": 60000,
  "cost": 26000,
  "sizes": [
   {
    "size": "28",
    "stock": 0
   },
   {
    "size": "30",
    "stock": 1
   },
   {
    "size": "31",
    "stock": 1
   },
   {
    "size": "32",
    "stock": 0
   },
   {
    "size": "34",
    "stock": 0
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 },
 {
  "id": "p19",
  "name": "Camiseta Vinotinto",
  "category": "Camisetas",
  "price": 60000,
  "cost": 25000,
  "sizes": [
   {
    "size": "S",
    "stock": 0
   },
   {
    "size": "M",
    "stock": 1
   },
   {
    "size": "L",
    "stock": 2
   },
   {
    "size": "XL",
    "stock": 1
   }
  ],
  "image": "",
  "description": "",
  "featured": false,
  "active": true
 }
];

  const DEFAULT_SETTINGS = {
    storeName: 'CJ',
    tagline: 'Estilo que se nota. Precio que se siente bien.',
    whatsapp: '573000000000',
    adminPin: '1234',
    shippingNote: 'Envíos a toda Colombia · Pago anticipado o contra-entrega',
  };

  const K = { products: 'cj_products_v1', orders: 'cj_orders_v1', settings: 'cj_settings_v1', cart: 'cj_cart_v1' };
  const mem = {};
  function read(key, fallback) {
    try { const v = localStorage.getItem(key); if (v != null) return JSON.parse(v); } catch (e) {}
    return key in mem ? mem[key] : JSON.parse(JSON.stringify(fallback));
  }
  function write(key, value) {
    mem[key] = value;
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }

  const COLORS = [
    ['vinotinto', '#6d1a2b'], ['albaricoque', '#f2b28c'], ['azul oscuro', '#1f2d4d'], ['azul', '#2f5aa8'],
    ['negro', '#1b1b1d'], ['blanco', '#f4f1ea'], ['rojo', '#c62f2f'], ['beige', '#d9c3a0'],
    ['caqui', '#b5a27a'], ['gris', '#8b8d91'], ['verde', '#3f6b4a'], ['rosa', '#e7a1b0'], ['amarillo', '#e8c547'],
  ];
  function colorsFor(name) {
    const n = (name || '').toLowerCase();
    const found = COLORS.filter(([k]) => n.includes(k)).map(([, c]) => c);
    const unique = found.filter((c, i) => found.indexOf(c) === i && !(c === '#2f5aa8' && found.includes('#1f2d4d')));
    return unique.length ? unique : ['#c9a96e'];
  }
  function shape(category) {
    const c = (category || '').toLowerCase();
    if (c.includes('pantal')) return 'pants';
    if (c.includes('corto')) return 'shortset';
    if (c.includes('conjunto') || c.includes('set')) return 'set';
    return 'shirt';
  }
  /* Ilustración de respaldo cuando la prenda aún no tiene foto */
  function placeholder(p) {
    const [c1, c2 = c1] = colorsFor(p.name);
    const s = shape(p.category);
    const stroke = 'rgba(0,0,0,.18)';
    const shirt = (y, col) => `<path d="M70 ${y}l30-18h12c4 10 12 15 18 15s14-5 18-15h12l30 18-14 30-18-8v62H102v-62l-18 8z" fill="${col}" stroke="${stroke}" stroke-width="2"/>`;
    const pants = (y, col, h) => `<path d="M104 ${y}h92l6 ${h}h-34l-18-${h - 20}-18 ${h - 20}h-34z" fill="${col}" stroke="${stroke}" stroke-width="2"/>`;
    let g = '';
    if (s === 'shirt') g = `<g transform="translate(0 40)">${shirt(40, c1)}</g>`;
    if (s === 'pants') g = pants(50, c1, 190);
    if (s === 'set') g = shirt(30, c1) + pants(152, c2, 120);
    if (s === 'shortset') g = shirt(46, c1) + pants(168, c2, 66);
    const bg = '#efe9df';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="${bg}"/><circle cx="150" cy="150" r="118" fill="#fff" opacity=".55"/>${g}<text x="150" y="288" font-family="Arial" font-size="11" fill="#9a8f80" text-anchor="middle" letter-spacing="3">CJ · FOTO PRÓXIMAMENTE</text></svg>`);
  }

  const CJ = {
    getProducts() { return read(K.products, SEED_PRODUCTS); },
    saveProducts(list) { return write(K.products, list); },
    getOrders() { return read(K.orders, []); },
    saveOrders(list) { return write(K.orders, list); },
    getSettings() { return Object.assign({}, DEFAULT_SETTINGS, read(K.settings, {})); },
    saveSettings(s) { return write(K.settings, s); },
    getCart() { return read(K.cart, []); },
    saveCart(c) { return write(K.cart, c); },
    resetAll() { [K.products, K.orders, K.settings, K.cart].forEach(k => { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }); },
    totalStock(p) { return (p.sizes || []).reduce((a, s) => a + (Number(s.stock) || 0), 0); },
    image(p) { return p.image || placeholder(p); },
    money(n) { return '$' + Math.round(Number(n) || 0).toLocaleString('es-CO'); },
    uid(prefix) { return (prefix || 'id') + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); },
    esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
    onChange(fn) { window.addEventListener('storage', e => { if (Object.values(K).includes(e.key)) fn(); }); },
  };
  window.CJ = CJ;
})();
