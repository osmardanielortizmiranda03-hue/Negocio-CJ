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
