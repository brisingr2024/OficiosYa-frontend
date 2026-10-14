# OficiosYa

## Integrantes
- Moschino Molina Tobias
- Gonzalez Raflo Luz
- Monetti Camila

## Descripción breve
OficiosYa es un sitio web que conecta a personas que necesitan resolver un problema del hogar (plomería, gas, electricidad, albañilería, carpintería, pintura, jardinería, limpieza, mudanzas, cerrajería y climatización) con profesionales de oficios. Incluye una página de inicio con presentación de servicios y buscador, y una página de contacto con formulario para solicitar presupuestos.

## Objetivo del proyecto
Facilitar el primer contacto entre quien necesita un servicio y quien lo ofrece. El usuario puede explorar los oficios disponibles, buscar el que necesita y pedir un presupuesto desde un formulario simple, sin tener que recorrer otras plataformas o buscar contactos por separado.

## Funcionalidades
- **Página de inicio** con presentación del sitio y sección principal (hero).
- **Catálogo de servicios** con tarjetas para cada oficio (plomería, gas, electricidad, albañilería, carpintería, pintura, jardinería, limpieza, mudanzas, cerrajería y climatización), cada una con su enlace "Ver detalles".
- **Buscador de servicios**, que utiliza el método GET para generar URLs compartibles y rastreables.
- **Página de contacto** con formulario para solicitar presupuestos.
- **Diseño responsive**, adaptado a celulares, tablets y computadoras con Tailwind CSS.
- **Optimización SEO y accesibilidad**, detalladas más abajo.

## ¿Tecnologías utilizadas?
Para el desarrollo se utilizó React como biblioteca principal para construir la interfaz, junto con Vite como herramienta de desarrollo y empaquetado. React permite dividir la página en componentes reutilizables (por ejemplo, la tarjeta de cada servicio o el formulario de contacto), y Vite ofrece un arranque rápido del proyecto y recarga inmediata de los cambios mientras se programa.

Para los estilos se utilizó Tailwind CSS, un framework basado en clases utilitarias que permite aplicar el diseño directamente en el marcado, mantener una identidad visual coherente y construir interfaces adaptables con rapidez, sin depender de hojas de estilo extensas.

Además se emplearon HTML5 para la estructura de las páginas, y Git y GitHub para el control de versiones y el trabajo en equipo.

## Estrategias de SEO implementadas
**1. Metadatos básicos optimizados**
- `<title>` descriptivo, con el nombre de la marca y la propuesta de valor: *"OficiosYA | Servicios Profesionales a tu Medida"*.
- `meta description` clara y breve que explica qué ofrece la plataforma, ya que es el texto que suele mostrarse debajo del título en los resultados de Google.
- `meta keywords` con los oficios principales (plomería, electricidad, gas, albañilería, carpintería, pintura, reparaciones). Aunque los buscadores actuales le dan poco peso, sirve como documentación de las palabras clave objetivo.
- `meta author` para identificar al responsable del sitio.
**2. Idioma y accesibilidad del documento**
- Atributo `lang="es"` en la etiqueta `<html>`, que ayuda a los buscadores y a los lectores de pantalla a identificar el idioma del contenido.
- `charset` UTF-8, para que los caracteres con tilde y la "ñ" se muestren correctamente.
**3. Diseño responsive (mobile-first)**
- `meta viewport` configurado para que el sitio se adapte a cualquier dispositivo. Google indexa priorizando la versión móvil, por lo que es un factor directo de posicionamiento.
**4. URL canónica**
- `<link rel="canonical">` apuntando a la URL principal del sitio, para evitar contenido duplicado y concentrar la autoridad en una sola dirección.
**5. Open Graph para redes sociales**
- Etiquetas `og:title`, `og:description`, `og:type` y `og:image`, que controlan cómo se ve el enlace al compartirlo en WhatsApp, Facebook, LinkedIn y otras plataformas. Una vista previa atractiva aumenta la tasa de clics.
**6. Rendimiento de carga**
- `preconnect` a Google Fonts para reducir el tiempo de conexión con el servidor de tipografías.
- Fuente Inter cargada con `display=swap`, evitando que el texto quede invisible mientras se descarga la fuente.
- Uso de Vite como herramienta de build, que genera archivos optimizados y minificados.
**7. Identidad visual**
- Favicon propio (el loro de la marca) y `theme-color` para reforzar el reconocimiento en pestañas del navegador y en dispositivos móviles.
**8. Despliegue con HTTPS**
- El sitio está publicado en Vercel, que sirve el contenido por HTTPS y con CDN global. Ambos son factores de confianza y velocidad que los buscadores valoran.

## Cómo ejecutar el proyecto
Requisitos: tener instalado Node.js y Git.

```bash
git clone <URL-del-repositorio>
cd <carpeta-del-proyecto>
npm install
npm run dev
```

Una vez iniciado, el sitio queda disponible en `http://localhost:5173`.

## Preguntas frecuentes

**¿Qué ventaja tiene usar HTML semántico?**
Mejora tanto el SEO como la accesibilidad, porque buscadores y lectores de pantalla entienden mejor el rol de cada parte de la página.

**¿Por qué React y Vite?**
React facilita reutilizar componentes y mantener el código ordenado, y Vite acelera el desarrollo con arranque rápido y recarga instantánea.

**¿Por qué Tailwind CSS?**
Porque permite estilizar directamente desde el marcado con clases utilitarias, resolver el responsive con prefijos como `md:` y `lg:` y mantener un diseño consistente sin escribir tantas reglas CSS propias.


## Hooks de React: useState
### ¿Por qué usamos `useState`?
Necesitamos que la interfaz cambie cuando el usuario envía el formulario, mostrando un mensaje de confirmación. Una variable común no sirve para esto, porque al modificarla React no vuelve a dibujar el componente y la pantalla seguiría igual. Con `useState`, en cambio, cada vez que el estado se actualiza React vuelve a renderizar el componente y la pantalla refleja el cambio de inmediato.

En este caso, `enviado` guarda si el formulario ya fue enviado (`false` si todavía no, `true` si ya se envió), y `setEnviado` es la función que se usa para modificar ese valor.

### ¿Cuándo se ejecuta?

La declaración se ejecuta cuando el componente se carga por primera vez, y ahí `enviado` se inicializa en `false`, por lo que el mensaje de confirmación no se muestra. Luego, cuando el usuario envía el formulario, la función `handleSubmit` llama a `setEnviado(true)`. Ese cambio hace que React vuelva a renderizar el componente y, gracias al renderizado condicional `{enviado && ...}`, aparece el mensaje de confirmación.

## Hooks de React: useEffect

En la página de Contacto usamos `useEffect` para que el mensaje de agradecimiento desaparezca solo, 5 segundos después de enviar el formulario.

**¿Por qué utilizamos useEffect?**
Porque esperar unos segundos y después ocultar el mensaje es una acción que ocurre por detrás, como consecuencia de que cambió el estado `enviado`. Para este tipo de acciones se usa `useEffect`.

**¿Cuándo se ejecuta?**
Se ejecuta cuando la página carga y cada vez que `enviado` cambia. Cuando la persona envía el formulario, `enviado` pasa a verdadero, aparece el mensaje y arranca un temporizador de 5 segundos. Al terminar, `enviado` vuelve a falso y el mensaje se oculta.

**¿Qué función cumplen sus dependencias?**
La dependencia `[enviado]` le indica a React que solo ejecute el efecto cuando `enviado` cambie. Así el temporizador se crea únicamente cuando el mensaje aparece y no en cada cambio de la pantalla.