import TeamMember from "../components/TeamMember";

const integrantes = [
  {
    nombre: "Tobias Moschino Molina",
    alt: "Foto de Tobias Moschino Molina",
  },
  {
    nombre: "Luz Priscila Gonzalez Raflo",
    alt: "Foto de Luz Priscila Gonzalez Raflo",
  },
  {
    nombre: "Monetti",
    alt: "Foto de Monetti",
  },
];

function About() {
  return (
    <main className="bg-white">

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">

        <h1 className="mb-8 text-4xl font-bold text-[#0D7A5F] md:text-5xl">
          Sobre Nosotros
        </h1>

        <div className="space-y-6 text-base leading-8 text-gray-600 md:text-lg">

          <p>
            En la actualidad, encontrar un profesional de oficios confiable y
            disponible suele ser un proceso lento y poco organizado: se recurre
            a recomendaciones informales, publicaciones dispersas en redes
            sociales o búsquedas al azar, sin una forma clara de comparar
            opciones ni de contactar directamente a quien puede resolver el
            problema.
          </p>

          <p>
            A partir de esa dificultad cotidiana surge OficiosYA, un proyecto
            pensado para conectar a personas con profesionales de oficios de
            forma simple, ordenada y confiable, centralizando en un solo lugar
            los distintos rubros de trabajo disponibles.
          </p>

          <p>
            OficiosYA está formado por un equipo de tres estudiantes, con el
            objetivo de aplicar de forma integrada los conocimientos adquiridos
            a lo largo de la carrera: desarrollo frontend, diseño de bases de
            datos relacionales y trabajo en colaboración mediante control de
            versiones.
          </p>

          <p>
            A través de este proyecto buscamos poner en práctica, de manera
            conjunta, las distintas herramientas y metodologías que fuimos
            incorporando durante la cursada, tomando como punto de partida una
            problemática real y cercana para darle una solución concreta y
            funcional.
          </p>

          <p className="pt-2 font-medium text-gray-700">
            Queremos expresar nuestro agradecimiento a la profesora Georgina
            Costilla, de la cátedra Programación IV, por su apoyo y orientación
            en cada etapa de este trabajo.
          </p>

        </div>
      </section>

      {/* INTEGRANTES */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {integrantes.map((integrante) => (
            <TeamMember
              key={integrante.nombre}
              nombre={integrante.nombre}
              alt={integrante.alt}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default About;