# El Triunfo - Ropa y Calzado

Sitio web de la tienda **El Triunfo**, ubicada en Berazategui, Buenos Aires. Tienda de ropa y calzado de marca con 2 locales (Juan María Gutiérrez y Barrio Marítimo).

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Despliegue:** Compatible con Vercel

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz (fonts, metadata, JSON-LD schema.org)
│   ├── page.tsx            # Landing page principal
│   ├── globals.css         # Estilos globales
│   └── catalogo/
│       └── page.tsx        # Página de catálogo con filtros
├── components/
│   ├── Navbar.tsx          # Navegación
│   ├── Hero.tsx            # Banner principal
│   ├── LogoBanner.tsx      # Banner de logos
│   ├── Categorias.tsx      # Selector de categorías
│   ├── CatalogoCliente.tsx # Catálogo interactivo (cliente)
│   ├── ProductCard.tsx     # Card de producto individual
│   ├── Cart.tsx            # Carrito de compras (sidebar)
│   ├── Lightbox.tsx        # Visor de imágenes a pantalla completa
│   ├── ContactoFooter.tsx  # Footer con información de contacto
│   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   └── Providers.tsx       # Providers globales (CartProvider)
├── context/
│   └── CartContext.tsx     # Estado global del carrito (localStorage)
└── data/
    └── productos.ts        # Catálogo de productos hardcodeado
```

## Funcionalidades

- **Landing page:** Hero, banner de logos, categorías y footer de contacto.
- **Catálogo:** Página `/catalogo` con productos filtrables por categoría (zapatillas, borcegos, buzos, remeras).
- **Carrito de compras:** Persiste en `localStorage`, con selección de talle y medio de pago (efectivo, transferencia, débito, crédito).
- **Precios diferenciados:** Cada producto tiene precios distintos según el método de pago.
- **Lightbox:** Visor de imágenes a pantalla completa.
- **Botón de WhatsApp:** Acceso rápido para consultas por WhatsApp.
- **SEO:** Metadata completa, Open Graph y JSON-LD schema.org (ClothingStore).

## Datos de productos

Los productos están definidos en `src/data/productos.ts` como un array estático. Cada producto incluye:

```ts
{
  id: string
  nombre: string
  categoria: string       // "zapatillas" | "borcegos" | "buzos" | "remeras"
  precio: number          // Precio base
  precios: {
    efectivo: number
    transferencia: number
    debito: number
    credito: number
  }
  talles: string[]
  imagen: string
  disponible: boolean
}
```

## Carrito (CartContext)

El carrito se gestiona con React Context (`CartContext`) y persiste en `localStorage` bajo la clave `el-triunfo-carrito`. Soporta:

- Agregar items (producto + talle + medio de pago)
- Modificar cantidades
- Eliminar items
- Calcular total según medio de pago seleccionado

## Inicio del proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

El servidor de desarrollo queda disponible en `http://localhost:3000`.

## Scripts disponibles

| Comando         | Descripción                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Servidor de desarrollo           |
| `npm run build` | Build de producción              |
| `npm start`     | Iniciar servidor de producción   |
| `npm run lint`  | Ejecutar ESLint                  |

## Notas para desarrollo

- Los productos son datos estáticos en `src/data/productos.ts`. Para agregar/quitar productos, editar ese archivo.
- Las imágenes de productos están en `public/images/`.
- El carrito es 100% client-side (localStorage), no hay backend.
- Los componentes que usan `useState`, `useContext` o event handlers llevan `"use client"` al inicio.
- Las páginas bajo `src/app/` son Server Components por defecto; los componentes interactivos se importan como client components.
