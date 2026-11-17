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

**Mapa**: Leaflet 1.9.4 (en `vendor/`) con teselas de OpenStreetMap, búsqueda con Nominatim y GPS del navegador.
El punto se envía como enlace `https://www.google.com/maps?q=lat,lng`. Se puede cambiar por Google Maps JS API
si se consigue una API key. Nominatim tiene límite de uso (1 petición por segundo); para producción conviene
un geocodificador propio o pago.

**Datos iniciales**: el catálogo sale de `Inventario_CJ.xlsx` (raíz del repo). `Ventas_CJ.xlsx` tiene el
historial de ventas, compras a proveedores y gastos, útil para diseñar los módulos de ventas/gastos.

`capturas/` tiene pantallazos de referencia del panel.
