### TFI-PROYECTO
## Integrantes: 
---- Moschino Molina Tobias
---- Gonzalez Raflo Luz
---- Monetti Camila

## Descripción breve
OficiosYa es un sitio web que conecta a personas que necesitan resolver un problema del hogar (plomería, gas,electricidad, albañilería, carpintería, pintura,jardinería, limpieza, mudanzas, cerrajería y climatización) con profesionales de oficios. Incluye una pagina de inicio con presentación de servicios y buscador, y una página de contacto con formulario para solicitar presupuestos.

## Objetivo del proyecto
Facilitar el primer contacto entre quien necesita un servicio y quien lo ofrece. El usuario puede explorar los oficios disponibles, buscar el que necesita y pedir un presupuesto desde un formulario simple, sin tener que recorrer otras plataformas o buscar contactos por separado.

## ¿Tecnologías utilizadas?
Para el desarrollo se utilizó React como biblioteca principal para construir la interfaz, junto con Vite como herramienta de desarrollo y empaquetado. React permite dividir la página en componentes reutilizables (por ejemplo, la gtarjeta de cada servicioo el formulario de contacto), y Vite ofrece un arranque rápido del proyecto y recarga inmediata de los cambios mientras se programa.
Para los estilos se utilizó Tailwind CSS, un framework basado en clases utilitarias que permite aplicar el diseño directamente en el marcado, mantener una identidad visual coherente y construir interfaces adaptables con rapidez, sin depender de hojas de estilo extensas.
Ademas se emplearon HTML5, Git y GitHub para el control de versiones y el trabajo en equipo.

## Accesibilidad
- Cada campo del formulario de contacto tiene su `label` asociada.
- El atributo `lang="es"` indica el idioma de la página a navegadores y lectores de pantalla.
- La estructura de encabezados ordenada y el HTML semántico facilitan la navegación con lectores de pantalla.
- Los elementos interactivos pueden recorrerse con el teclado.

## Cómo ejecutar el proyecto
Requisitos: tener instalado Node.js y Git.

```bash
git clone <URL-del-repositorio>
cd <carpeta-del-proyecto>
npm install
npm run dev
```

Una vez iniciado, el sitio queda disponible en `http://localhost:5173`.




## Estrategias de SEO implementadas
1. **Meta etiquetas esenciales**: `title` único y descriptivo por página, `meta descrption`, `meta robots` (index,follow) y `link rel="canonical"`.
2. **Open Graph**: `og:type`, `og;title`, `og:description`, `og;image` y `og:url para optimizar cómo se comparte eñ sitio en redes sociales (Facebook, LinkedIn).
3. **Datos estructrurados Json-LD (Schema.org)**: marcado `HomeAndConstructionBusiness`con dirección, teléfono y catálogo completo de servicios (`OfferCatalog`), para que Google entienda el rubro del negocio.
4. **Jerarquía de encabezados clara**: un único `H1` por página con la palabra clave principal, y estructura `H2 → H3` en la sección de servicios.
5. **Enlaces descriptivos con atributo `title`**: cada "Ver detalles" incluye texto de anclaje único y un `title` específico del oficio, en vez de "click aquí".
6. **HTML semántico**: uso de `header`, `nav`, `main`, `section`, `article` y `footer`/`address`, que ayuda a los buscadores a interpretar la estructura del contenido.
7. **Texto alternativo en imágenes**: atributo `alt` descriptivo en las imágenes (ej. la del hero).
8. **Optimización de carga de fuentes**: `preconnect` a Google Fonts, lo que mejora la velocidad de carga y es un factor de posicionamiento.
9. **Formulario de búsqueda con método GET**: genera URLs rastreables por los buscadores en vez de ocultar los parámetros de búsqueda.

## Accesibilidad


**¿Qué ventaja tiene usar HTML semántico?**
Mejora tanto el SEO como la accesibilidad, porque buscadores y lectores de pantalla entienden mejor el rol de cada parte de la página.


**¿Por qué React y Vite?**
React facilita reutilizar componentes y mantener el código ordenado, y Vite acelera el desarrollo con arranque rápido y recarga instantánea.


**¿Por qué Tailwind CSS?**
Porque permite estilizar directamente desde el marcado con clases utilitarias, resolver el responsive con prefijos como `md:` y `lg:` y mantener un diseño consistente sin escribir tantas reglas CSS propias.

