# Tienda virtual CJ — prototipo

- `index.html` — la tienda que ven tus clientes (catálogo, filtros, tallas, bolsa, pedido por WhatsApp).
- `admin.html` — panel administrativo (PIN de prueba: **1234**). Subir prendas con foto, editar precios, sumar/restar stock por talla, ocultar prendas, gestionar pedidos y ver resumen de inventario.
- `cj-data.js` — datos compartidos. El catálogo inicial sale de `Inventario_CJ.xlsx`.

Para probarlo, abre `index.html` en el navegador. Los datos se guardan en ese navegador (prototipo);
usa "Descargar respaldo" en Ajustes para no perder cambios.

## Ubicación en el mapa
Al finalizar la compra el cliente marca su casa en un mapa (OpenStreetMap, gratis y sin clave):
botón "Usar mi ubicación actual", buscador de barrio/dirección, o tocar/arrastrar el puntero.
El mensaje de WhatsApp incluye el enlace de Google Maps con el punto exacto, y en el panel
(Pedidos) ves el mapa con botones "Ver en Google Maps", "Cómo llegar" y "Escribir al cliente".
`vendor/` contiene la librería Leaflet 1.9.4.

## Para el programador

Prototipo 100% estático (HTML + JS sin framework, sin build). Abrir `index.html` con cualquier servidor estático
(`python3 -m http.server`). Panel en `admin.html`, PIN de prueba `1234`.

**Qué es solo de prototipo y hay que reemplazar**
- Persistencia: todo vive en `localStorage` del navegador (`cj-data.js`, claves `cj_products_v1`, `cj_orders_v1`,
  `cj_settings_v1`, `cj_cart_v1`). Necesita backend/base de datos compartida.
- Acceso al panel: PIN guardado en el cliente, sin seguridad real. Necesita autenticación de verdad.
- Fotos: se reducen a 700px y se guardan como dataURL JPEG. Necesita almacenamiento de archivos (bucket/CDN).
- Pedidos: se arma el mensaje y se abre `wa.me/<numero>?text=...`; el pedido se guarda localmente como "Pendiente".
- Stock: se descuenta al "Confirmar" en el panel y se devuelve al cancelar un pedido confirmado. En producción
  esto debe ser transaccional en el servidor.

**Modelo de datos**
- Producto: `{id, name, category, price, cost, description, image, featured, active, sizes:[{size, stock}]}` (precios en COP).
- Pedido: `{id, date, status: Pendiente|Confirmado|Entregado|Cancelado, total,
  items:[{id, name, size, qty, price}], customer:{name, phone, city, address, refs, method, lat, lng}}`.
- Ajustes: `{storeName, tagline, whatsapp, adminPin, shippingNote}`.

**Fotos extra, videos y ficha técnica**
- Producto añade `media:[{type:'image'|'video', id} | {type:'embed', url}]` y
  `details:{fabric, composition, fit, care, features, sizing}` (`features` y `sizing` = texto, una línea por ítem).
- Los archivos (fotos extra ya reducidas a 1200px y videos tal cual, máx. 150 MB) van a IndexedDB `cj_media`
  (`CJ.media.put/get/url/del`). En producción: subir a almacenamiento de archivos y, para video, idealmente
  transcodificar a MP4 H.264 + póster (p. ej. Cloudinary, Mux o Bunny Stream).
- Enlaces de YouTube, TikTok e Instagram se convierten a reproductor incrustado con `CJ.embed(url)`.

**Pensado para celular (la mayoría de clientes llega desde Facebook Marketplace / WhatsApp)**
- Enlace directo por prenda: `index.html#p=<id>` abre la ficha. En producción conviene una URL real por
  producto (`/p/set-blanco`) renderizada en servidor con etiquetas Open Graph (`og:title`, `og:image`,
  `og:price:amount`) para que el enlace muestre foto y precio al pegarlo en Marketplace/WhatsApp.
- En celular la ficha es pantalla completa con barra de compra fija; barra "Mi bolsa" fija abajo;
  categorías fijas al bajar; inputs a 16px (evita zoom en iPhone).
- WhatsApp: si el navegador interno de Facebook/Instagram bloquea la ventana nueva, se abre en la misma pestaña.
- Panel → Prendas → "📣 Publicar": arma texto para Marketplace con tallas disponibles, tela y enlace, y usa
  Web Share API (comparte la foto + texto) o copia al portapapeles.

**Mapa**: Leaflet 1.9.4 (en `vendor/`) con teselas de OpenStreetMap, búsqueda con Nominatim y GPS del navegador.
El punto se envía como enlace `https://www.google.com/maps?q=lat,lng`. Se puede cambiar por Google Maps JS API
si se consigue una API key. Nominatim tiene límite de uso (1 petición por segundo); para producción conviene
un geocodificador propio o pago.

**Datos iniciales**: el catálogo sale de `Inventario_CJ.xlsx` (raíz del repo). `Ventas_CJ.xlsx` tiene el
historial de ventas, compras a proveedores y gastos, útil para diseñar los módulos de ventas/gastos.

`capturas/` tiene pantallazos de referencia del panel.
