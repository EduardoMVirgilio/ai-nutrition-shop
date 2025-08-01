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
1. Visión y Stack Tecnológico
Proyecto: "NutritiON", un e-commerce de suplementos.
Directiva: Construir una aplicación web completa, con un diseño moderno, profesional y totalmente responsive, usando JavaScript.
Stack: React 18, Vite, JavaScript (JSX), React Router v6, Context API, Formik/Yup, EmailJS y Tailwind CSS.
2. Estructura y Datos
Estructura: Organizar el proyecto en carpetas claras: /src con subcarpetas para components (UI global), context, data, hooks, pages, routes y services.
Datos: Crear un archivo /src/data/products.json. Debe contener al menos 3 categorías ('proteinas', 'vitaminas', 'pre-entrenos'), con 6 productos por categoría.
Schema de Producto: { id, name, description, summary, price, category, image, stock }.
3. Manejo de Estado (Context API)
ProductsContext: Gestiona el fetch y almacenamiento de los productos desde products.json.
CartContext: Gestiona las acciones del carrito (ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART). El estado del carrito debe persistir en localStorage.
UIContext: Controla un modal de confirmación genérico y el estado del menú móvil.
4. Rutas y Navegación
Configurar en AppRoutes.js usando lazy loading y un MainLayout que contenga el Header y Footer.
/: HomePage
/about: AboutUsPage
/products: ProductsPage
/product/:productId: ProductDetailPage
/cart: CartPage
/contact: ContactPage
/checkout: CheckoutPage (Si el carrito está vacío, redirigir a /products).
5. Lógica de Páginas y Funcionalidades
Un modal de confirmación (controlado por UIContext) debe usarse para todas las acciones destructivas (eliminar ítem, vaciar carrito) y para confirmar adiciones al carrito.
HomePage: Debe tener un header responsive, sección hero, una sección de productos destacados (ProductCard) y un footer.
ProductsPage: Incluir filtros funcionales por categoría y renderizar la lista de productos.
ProductDetailPage: Mostrar toda la información detallada de un producto con un selector de cantidad.
CartPage: Listar los ítems del carrito, permitiendo modificar su cantidad o eliminarlos (con modal). Mostrar el total y un botón para ir al checkout.
CheckoutPage: Mostrar resumen del pedido y un formulario de envío (validado con Formik/Yup). Al "pagar", la lógica debe limpiar el carrito y redirigir al inicio con un mensaje de éxito.
ContactPage: Crear un formulario (nombre, apellido, email, asunto) validado con Formik/Yup. En un envío válido, usar el servicio de EmailJS para enviar un correo real y mostrar feedback (éxito/error) al usuario.
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
