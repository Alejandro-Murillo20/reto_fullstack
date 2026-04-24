# 👔 Alejandro Store - Boutique de Gala

**Alejandro Store** es una plataforma de E-commerce de alta gama especializada en moda formal y de gala. El proyecto ha sido desarrollado con un enfoque minimalista, utilizando una paleta de colores basada en negro, blanco y acentos plateados para transmitir lujo y sofisticación.

## 🚀 Tecnologías Utilizadas

- **React.js** (Vite)
- **Tailwind CSS** (Diseño y estilos modernos)
- **Zustand** (Gestión de estado global para el carrito y autenticación)
- **React Router Dom** (Navegación dinámica)
- **Firebase** (Autenticación de usuarios y base de datos Firestore para pedidos)

## 📁 Estructura del Proyecto (Atomic Design)

El proyecto sigue la metodología de **Atomic Design** para garantizar un código escalable y organizado:

```text
src/
├── components/
│   ├── atoms/       # Componentes básicos: Notificaciones, botones, inputs.
│   ├── molecules/   # Combinación de átomos: ProductCard, SearchBar, CategoryFilters.
│   ├── organisms/   # Bloques complejos: Navbar, Footer, Hero Banner.
│   └── templates/   # Layouts estructurales para la consistencia del diseño.
├── pages/           # Vistas principales: Home, ProductDetail, Cart, Checkout, Auth, Admin.
├── mockdata/        # Datos locales para productos, usuarios y categorías.
├── store/           # Stores de Zustand (useCartStore, useAuthStore).
├── services/        # Lógica de comunicación con Firebase (orderService, productService).
├── firebase/        # Configuración y conexión con Firebase.
└── styles/          # Configuraciones globales de CSS y Tailwind.
```

## ✨ Funcionalidades Principales

1. **Catálogo de Gala:** Visualización de 16 productos con imágenes de alta calidad.
2. **Buscador Inteligente:** Filtro por texto que no distingue entre mayúsculas y minúsculas.
3. **Filtros por Categoría:** Clasificación dinámica de productos (Trajes, Camisas, etc.).
4. **Paginación:** Visualización optimizada de 8 productos por página.
5. **Carrito de Compras:** Gestión en tiempo real con notificaciones de éxito al agregar piezas.
6. **Autenticación:** Sistema de registro e ingreso de usuarios mediante Firebase.
7. **Checkout:** Formulario de pago simulado con persistencia de datos en la nube.
8. **Panel de Administrador:** Tabla privada para visualizar el historial de ventas registradas.

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-de-tu-repositorio>
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Configurar Firebase:**
   Crea un archivo en `src/firebase/config.js` con tus credenciales de Firebase Console.
4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---
**Desarrollado por:** Emiliano
**Año:** 2026
**Proyecto:** Final E-Commerce Fullstack
