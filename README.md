# AI Nutrition Shop - E-commerce de Suplementos

AI Nutrition Shop es una aplicación web de comercio electrónico especializada en la venta de suplementos nutricionales, vitaminas y productos relacionados con el fitness y la salud.

## 🧠 Origen del Proyecto

Este proyecto fue generado inicialmente mediante inteligencia artificial utilizando Google AI Studio, con un proceso de optimización posterior realizado por Bolt. La estructura y el código base fueron creados a partir de prompts específicos que guiaron la generación del proyecto.

### Prompt Original Utilizado en Google AI Studio

**System Prompt:**

```
Quiero que me respondas como un desarrollador web especialista en React, autodidacta y experto en e-commerce / websites. La respuesta que espero, es un prompt detallado y complejo con todas las características que pueda utilizar para crear el proyecto de forma profesional, siguiendo las mejores prácticas y que sea escalable y mantenible. No quiero que me siguieras opciones o código, elige lo mejor para llevar el proyecto a el mundo real.
```

**Prompt del Usuario:**

```
# Proyecto de E-commerce Suplementos Nutricionales

La temática del proyecto es un E-commerce. Deberá ser una página para una empresa que venda algún producto o grupo de productos y/o servicios.

Cuida el diseño, no solo las funcionalidades y que sea responsive.

La empresa se llama "NutritiON" y deberá contar con los siguientes requisitos:

Una landing page de bienvenida con:

-Header con su navbar funcional en responsive con API Context.
-Hero representativo de su página.
Un breve apartado introductorio de about, que lleve a la página de "Sobre Nosotros" de alguna manera (por ejemplo, un botón).
-Sección de cards con productos destacados que lleve a la página de productos de alguna manera (por ejemplo, un botón).
-Footer.

Una página de "Sobre nosotros" (Con Header , footer y la información que corresponda y quieran colocar en su página "Sobre nosotros").

Una página de "Productos" , con los productos renderizados dinámicamente, lógica de filtros, agregado de productos al carrito, manejo de cantidades en carrito y la posibilidad de vaciar el carrito, borrar individualmente cada producto y realizar compra.(Todas estas acciones deben tener un modal de confirmación).

Una página de contacto en la cual tienen que tener al menos un formulario de contacto con los campos "nombre", "apellido" , "email" y "asunto". Además, utilizando Formik, deberán realizar la validación del formulario de contacto. El mismo no debe enviar nada, pero si cumplir con la validación de manera correcta de cada uno de los campos y renderizar un mensaje de envió correcto en caso de que todos los campos pasen dicha validación.

Todas las páginas vinculadas entre si mediante React Router.

Diseño responsive de todas las páginas.

Se deben poder persistir los productos del carrito, usando Context API y localStorage.

- Debe haber un archivo JSON con los productos, separados por categoría y debe tener al menos 6 productos por categoría.

- Agregar una página de checkout al realizar la compra.

- Agregar una página de producto para cada producto individual.

- Agregar envió de mail desde el formulario de contacto, usando API's como emailJS.

```

**Resultado del Prompt:**

```
1. Visión General y Stack Tecnológico
Proyecto: "NutritiON", un e-commerce de suplementos nutricionales.
Directiva: Crear una aplicación web completa, con un diseño moderno, profesional y totalmente responsive. La arquitectura debe ser modular y escalable.
Stack Tecnológico Mandatorio:
Core: React 18, Vite, TypeScript.
Routing: React Router v6.
Estilos: Tailwind CSS (utility-first) y CSS Modules para componentes específicos.
Estado: React Context API con el hook useReducer.
Formularios: Formik para gestión y Yup para validación.
APIs Externas: EmailJS para el envío de formularios.
2. Arquitectura y Estructura de Archivos
Adherirse estrictamente a la siguiente estructura feature-driven:
Generated code
/src
├── assets/
├── components/         # UI global (Button, Input, Modal, Spinner)
├── context/            # CartContext, ProductsContext, UIContext
├── data/
│   └── products.json   # Base de datos de productos
├── features/           # Lógica de negocio (products, checkout)
├── hooks/              # Hooks personalizados (useLocalStorage, etc.)
├── layouts/
│   └── MainLayout.tsx    # Layout con Header, Footer y <Outlet/>
├── pages/              # Componentes de página
├── routes/
│   └── AppRoutes.tsx     # Definición de rutas
├── services/
│   └── emailService.ts   # Integración con EmailJS
├── styles/
│   └── global.css
├── types/
└── utils/
Use code with caution.
3. Datos y Manejo de Estado
products.json: Crear este archivo en /src/data. Debe contener al menos 3 categorías ('proteinas', 'vitaminas', 'pre-entrenos'), con un mínimo de 6 productos por categoría.
Schema del Producto: { id, name, description, summary, price, category, image, stock }.
Context API:
ProductsContext: Gestiona el fetch y almacenamiento de los productos desde products.json. Estado: { products, isLoading, error }.
CartContext: Gestiona todas las acciones del carrito (ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART). El estado del carrito debe persistir en localStorage utilizando un hook useLocalStorage integrado con el reducer.
UIContext: Controla el estado global de la UI, como la apertura del menú móvil y la gestión de un modal de confirmación genérico. Estado: { isMobileMenuOpen, modal: { isOpen, config } }.
4. Rutas y Navegación
Configurar todas las rutas en AppRoutes.tsx usando React.lazy() para code-splitting. Todas las páginas deben renderizarse dentro de un MainLayout.
/: HomePage
/about: AboutUsPage
/products: ProductsPage
/product/:productId: ProductDetailPage
/cart: CartPage
/contact: ContactPage
/checkout: CheckoutPage (Ruta protegida: redirigir a /products si el carrito está vacío).
5. Especificaciones de Páginas y Funcionalidades Clave
Componente Modal Genérico: Controlado por UIContext, debe ser usado para todas las acciones que requieran confirmación del usuario.
HomePage (Landing):
Header responsive con menú hamburguesa (controlado por UIContext) y navegación.
Sección Hero con un CTA a la página de productos.
Sección de productos destacados que renderice ProductCards y un enlace a /products.
Footer con información básica.
ProductsPage:
Implementar filtros funcionales por categoría.
Renderizar la lista de productos filtrados usando un componente ProductCard.
El botón "Agregar al Carrito" en cada ProductCard debe invocar un modal de confirmación.
ProductDetailPage:
Obtener el ID del producto de la URL y mostrar sus detalles completos.
Incluir un selector de cantidad y un botón para añadir al carrito.
CartPage:
Listar los productos del carrito, permitiendo ajustar cantidad y eliminar ítems.
Las acciones "Eliminar" y "Vaciar Carrito" deben usar el modal de confirmación.
Mostrar el total y un botón "Finalizar Compra" que navegue a /checkout.
ContactPage:
Formulario con los campos nombre, apellido, email y asunto.
Usar Formik y Yup para la validación: todos los campos son requeridos, email válido, y asunto con longitud mínima.
En un envío válido, usar emailService.ts para enviar un email real a través de EmailJS. Gestionar los estados de carga y mostrar feedback (éxito/error) al usuario.
CheckoutPage:
Mostrar un resumen del pedido.
Formulario de información de envío (con Formik y Yup).
Al "pagar", la lógica debe: limpiar el carrito, limpiar localStorage y redirigir al usuario a la HomePage con un mensaje de compra exitosa.
6. Requisitos de Calidad
Diseño Responsive: La aplicación debe ser 100% funcional y estéticamente pulcra en todas las resoluciones, desde móviles (320px) hasta escritorio.
Código: Escribir código limpio, bien documentado (JSDoc para componentes y hooks) y fuertemente tipado con TypeScript.
Accesibilidad (a11y): Usar HTML semántico y atributos ARIA donde sea necesario.
```

## 🚀 Características Principales

- Catálogo de productos organizado por categorías
- Carrito de compras funcional
- Filtrado de productos por categorías y precios
- Diseño responsivo para todos los dispositivos
- Interfaz de usuario intuitiva y moderna

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18
- **Estilización**: CSS Modules + Tailwind CSS
- **Enrutamiento**: React Router
- **Gestión de Estado**: React Context API
- **Bundler**: Vite
- **Linting**: ESLint
- **Formateo de Código**: Prettier

## 📦 Estructura del Proyecto

```

src/
├── components/ # Componentes reutilizables
│ ├── common/ # Componentes comunes (Botones, Modales, etc.)
│ ├── layout/ # Componentes de diseño (Header, Footer, Layout)
│ └── ui/ # Componentes de interfaz de usuario
├── context/ # Contextos de React
├── data/ # Datos estáticos (ej. productos)
├── hooks/ # Custom Hooks
├── pages/ # Componentes de páginas
└── styles/ # Estilos globales

```

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/EduardoMVirgilio/ai-nutrition-shop.git
   cd ai-nutrition-shop
   ```

````

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🧪 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Previsualiza la versión de producción localmente
````
