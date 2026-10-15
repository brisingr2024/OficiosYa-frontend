# OficiosYa 

Aplicación web para encontrar profesionales de oficios y servicios para el hogar. Este es el segundo repositorio del proyecto: la versión desarrollada con React y Vite, en la que se migraron y organizaron las distintas partes de la interfaz.

## Integrantes

- Moschino Molina Tobias
- Gonzalez Raflo Luz
- Monetti Camila

## Descripción y objetivo

OficiosYa conecta a personas que necesitan resolver un problema del hogar con profesionales de distintos rubros. Se pueden explorar servicios, buscar profesionales por oficio y enviar una consulta desde el formulario de contacto.

El objetivo es facilitar el primer contacto entre quien necesita un servicio y quien lo ofrece, desde una interfaz adaptable a distintos dispositivos.

## Funcionalidades

- Página de inicio con presentación del proyecto y catálogo de servicios.
- Catálogo de oficios con tarjetas generadas dinámicamente.
- Búsqueda de profesionales por oficio. El término se incluye en la URL como parámetro (`/servicios?servicio=...`), por lo que la búsqueda se puede compartir o volver a abrir.
- Consulta de profesionales a una API mediante Axios, con estados de carga y error.
- Mensajes de error, validación y confirmación mediante SweetAlert2.
- Formulario de contacto con validaciones del navegador. El formulario muestra una confirmación en pantalla; no envía ni almacena los datos en un servidor.
- Navegación entre páginas y menú adaptable para pantallas pequeñas.
- Página de error para rutas que no existen.

## Tecnologías

- React y JavaScript
- Vite
- Tailwind CSS para los estilos y el diseño responsive
- React Router para la navegación
- Axios para las peticiones HTTP
- SweetAlert2 para los mensajes al usuario
- HTML semántico
- Git y GitHub para el control de versiones
- Vercel para el deploy

El TP5 permite elegir Tailwind CSS en lugar de React Bootstrap. En este repositorio se eligió Tailwind; por eso, los estilos se aplican principalmente con clases utilitarias en los componentes.

## Organización de la aplicación

Las páginas y componentes se encuentran dentro de `src/`:

- `pages/`: vistas `Home`, `Servicios`, `Contacto`, `About`, `Login` y `Error404`.
- `components/`: elementos reutilizables como `Navbar`, `Footer`, `Hero`, `ServiceGrid`, `ServiceCard` y `CampoFormulario`.
- `components/routes/Rutas.jsx`: definición de las rutas con React Router.
- `data/servicios.js`: datos locales utilizados para mostrar los servicios del catálogo.
- `hooks/useSweetAlert.js`: hook reutilizable para mostrar alertas.

`ServiceGrid` recibe por props la lista y el título que debe mostrar. Recorre la lista con `map()` y crea una `ServiceCard` por servicio; así se evita repetir el marcado de cada tarjeta. La página `Servicios` también transforma con `map()` los profesionales recibidos de la API para presentarlos en la grilla.

### Rutas

| URL | Página |
| --- | --- |
| `/` | Inicio |
| `/servicios` | Catálogo y resultados de búsqueda |
| `/contacto` | Formulario de contacto |
| `/about` | Sobre nosotros |
| `/login` | Inicio de sesión |
| Cualquier ruta no definida | Página 404 |

## Hooks e interacción

### `useState`

Se utiliza para guardar valores que cambian durante el uso de la aplicación y que deben reflejarse en la interfaz:

- En `Navbar`, controla si el menú móvil está abierto y conserva el texto ingresado en el buscador.
- En `Servicios`, guarda los profesionales obtenidos de la API, el estado de carga y el mensaje de error.
- En `useSweetAlert`, controla el estado de las alertas para cerrar el mensaje automáticamente.

Los eventos de formulario y botones actualizan esos estados o realizan acciones de navegación. En el formulario de contacto se valida la información, se muestra el resultado y se reinician los campos al confirmar el envío.

### `useEffect`

- En `Servicios`, inicia la petición a la API cuando se monta la página. También cancela la petición al desmontarse el componente, para evitar actualizar una vista que ya no está activa.
- En `Servicios`, reacciona a los cambios de la búsqueda y de los resultados para informar cuando no hay profesionales coincidentes.
- En `useSweetAlert`, programa el cierre de la alerta a los cinco segundos y limpia el temporizador cuando corresponde.

Las dependencias de cada efecto indican qué valores deben cambiar para que React lo ejecute nuevamente; las funciones de limpieza cancelan la petición o el temporizador cuando dejan de ser necesarios.

## Consumo de API y configuración

La página `/servicios` obtiene profesionales desde la URL configurada en `VITE_API_URL`. La petición se realiza con Axios dentro de `useEffect`; la respuesta esperada es un arreglo de profesionales. Para mostrar sus datos se utilizan los campos `id`, `oficio`, `nombre`, `ubicacion` y `foto` (los campos opcionales pueden faltar).

La URL no está escrita directamente en el componente. Para ejecutar el proyecto localmente, crear un archivo `.env` en la raíz:

```env
VITE_API_URL=https://url-de-la-api
```

Reemplazar el valor de ejemplo por la URL de la API pública utilizada para el proyecto. Vite expone al navegador las variables que empiezan con `VITE_`. El archivo `.env` está excluido de Git mediante `.gitignore`; no se debe subir al repositorio. En Vercel, configurar `VITE_API_URL` como variable de entorno del proyecto y volver a desplegar.

La interfaz muestra un estado de carga, informa los errores de conexión con SweetAlert2 y presenta los datos cuando la API responde correctamente.

## Diseño responsive y accesibilidad

Tailwind CSS se utiliza para definir colores, tipografías, espaciados, bordes, sombras y distribución. Flexbox aparece, por ejemplo, en la barra de navegación y en el menú móvil; CSS Grid se utiliza en la grilla de tarjetas de servicios. Las clases responsive ajustan la distribución entre una, dos o tres columnas según el ancho de pantalla, además de adaptar la navegación.

Los componentes utilizan elementos semánticos como `header`, `nav`, `main`, `section`, `article` y `footer`. Las imágenes de los servicios incluyen texto alternativo, y los controles del menú y de búsqueda tienen etiquetas accesibles.

## Estrategias SEO implementadas

En `index.html` se configuraron prácticas básicas de SEO:

- Título descriptivo del sitio.
- Meta descripción relacionada con los servicios ofrecidos.
- Atributo `lang="es"` y codificación UTF-8.
- Meta viewport para la correcta visualización en dispositivos móviles.
- URL canónica del sitio publicado.
- Metadatos Open Graph para compartir la página en redes sociales.
- Favicon e imágenes con texto alternativo.
- Uso de encabezados y estructura semántica en las páginas.

## Requisitos

- Node.js y npm.
- Git, si se desea clonar el repositorio.

## Instalación y ejecución

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/brisingr2024/OficiosYa-frontend.git
cd OficiosYa-frontend
npm install
```

Crear el archivo `.env` con `VITE_API_URL` como se indica en la sección de API y ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Vite informa en la terminal la dirección local; normalmente es `http://localhost:5173`.

Para generar y probar la versión de producción:

```bash
npm run build
npm run preview
```

También están disponibles `npm run lint` para revisar el código con ESLint.

## Deploy

El sitio está publicado en Vercel:

https://oficios-ya-frontend.vercel.app/

La variable `VITE_API_URL` debe configurarse también en las variables de entorno del proyecto de Vercel.
