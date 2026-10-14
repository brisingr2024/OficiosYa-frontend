# OficiosYA

OficiosYA es una aplicación web de frontend que presenta oficios y conecta a personas que necesitan resolver trabajos del hogar con profesionales. Permite explorar un catálogo de servicios, buscar profesionales por oficio y acceder a formularios de contacto.

## Contenidos

- [Funcionalidades](#funcionalidades)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Configuración de la API](#configuración-de-la-api)
- [Rutas de la aplicación](#rutas-de-la-aplicación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Alcance actual](#alcance-actual)
- [Equipo](#equipo)

## Funcionalidades

- **Inicio:** presenta OficiosYA y muestra un catálogo local de oficios mediante tarjetas.
- **Búsqueda desde el navbar:** permite buscar profesionales escribiendo un oficio. El término se incluye en el parámetro `servicio` de la URL, por ejemplo, `/servicios?servicio=plomeria`.
- **Servicios:** consulta trabajadores a una API mediante Axios y filtra los resultados por el campo `oficio`. La búsqueda no distingue mayúsculas ni tildes. Si se entra sin un término, se muestran todos los trabajadores devueltos por la API.
- **Estados de la consulta:** se muestra un indicador mientras carga; los errores de configuración o conexión se notifican con SweetAlert2. Si no hay coincidencias, se muestra una alerta informativa.
- **Contacto:** valida los campos requeridos y el formato del email, informa el resultado con SweetAlert2 y limpia el formulario tras confirmar.
- **Inicio de sesión:** valida email y contraseña y muestra un indicador de espera. La operación es una simulación de interfaz.
- **Diseño adaptable:** utiliza clases responsive de Tailwind CSS para distintos tamaños de pantalla.
- **Navegación:** React Router gestiona las rutas del sitio y muestra una página para rutas no encontradas.

Las alertas de SweetAlert2 se cierran automáticamente a los cinco segundos. Este comportamiento está centralizado en un hook con `useEffect`.

## Tecnologías

- React y React DOM
- Vite
- React Router
- Axios
- SweetAlert2
- Tailwind CSS 4
- JavaScript (ES modules)

## Requisitos

- Node.js compatible con la versión de Vite instalada en el proyecto.
- npm.
- Una URL accesible para la API de trabajadores configurada en `VITE_API_URL`.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm install
```

Crear el archivo local `.env` como se describe en [Configuración de la API](#configuración-de-la-api) y luego iniciar el servidor:

```bash
npm run dev
```

Vite informa en la terminal la dirección local donde se puede abrir la aplicación (normalmente `http://localhost:5173`).

### Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la versión de producción en dist/
npm run preview  # Sirve localmente la última compilación
npm run lint     # Ejecuta ESLint
```

## Configuración de la API

La página Servicios obtiene los profesionales desde la URL indicada por la variable de entorno `VITE_API_URL`. No se debe escribir la URL de la API directamente en los componentes.

1. Crear `.env` en la raíz del proyecto.
2. Definir la URL de la API:

   ```dotenv
   VITE_API_URL=https://tu-api.com/trabajadores
   ```

3. Guardar el archivo y reiniciar el servidor de desarrollo si ya estaba ejecutándose.

El archivo `.gitignore` excluye los archivos `.env*`; el `.env` local no debe subirse al repositorio. Cada persona que clone el proyecto debe configurar su propio archivo.

La API debe responder a una petición `GET` con un arreglo JSON de trabajadores. La interfaz utiliza estos campos:

| Campo | Uso |
| --- | --- |
| `id` | Identificador del trabajador y clave de la tarjeta. |
| `nombre` | Nombre del profesional, mostrado en la descripción de la tarjeta. |
| `oficio` | Texto utilizado para filtrar y como título de la tarjeta. |
| `ubicacion` | Ubicación del profesional, mostrada en la descripción. |
| `foto` | URL de la imagen del profesional, utilizada en la tarjeta. |

`id`, `nombre`, `ubicacion` y `foto` pueden faltar sin impedir que se muestre el oficio; cuando falta `oficio`, se presenta como “Oficio sin especificar” y no coincide con búsquedas de texto.

La página Inicio obtiene sus tarjetas de datos locales en `src/data/servicios.js`; la página Servicios muestra trabajadores recibidos desde la API. Son dos listados distintos.

## Rutas de la aplicación

| Ruta | Página |
| --- | --- |
| `/` | Inicio y catálogo local de servicios. |
| `/servicios` | Todos los profesionales que devuelve la API. |
| `/servicios?servicio=plomeria` | Profesionales cuyo oficio coincide con el término buscado. |
| `/contacto` | Formulario de contacto. |
| `/login` | Formulario de inicio de sesión simulado. |
| `/about` | Información del proyecto y del equipo. |
| Cualquier otra ruta | Página no encontrada. |

## Estructura del proyecto

```text
.
├── public/                  # Recursos servidos directamente, como el favicon y el logo
├── src/
│   ├── assets/              # Imágenes y recursos importados por los componentes
│   ├── components/          # Navbar, footer, hero, tarjetas, formularios y rutas
│   ├── data/                # Catálogo local de servicios
│   ├── hooks/               # Hooks compartidos, como las alertas temporizadas
│   ├── pages/               # Inicio, servicios, contacto, login, about y 404
│   ├── App.jsx              # Entrada de la interfaz
│   ├── App.css
│   ├── index.css
│   └── main.jsx             # Montaje de React
├── .env                     # Configuración local, no versionada
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Alcance actual

- El formulario de contacto solo valida los datos, muestra una confirmación y reinicia sus campos; actualmente no envía la información a un servidor.
- El inicio de sesión es una simulación visual: no autentica usuarios ni consulta un backend.
- El botón “Ver servicio” de las tarjetas todavía no navega a una página de detalle.
- El catálogo de Inicio es estático y no depende de la API. El listado y el filtro de la ruta Servicios sí dependen de la API y de que esta responda correctamente.

## Equipo

- Tobias Moschino Molina
- Luz Priscila Gonzalez Raflo
- Monetti
