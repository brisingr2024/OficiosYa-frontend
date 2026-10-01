function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Decoración izquierda */}
      <img
        src="/img/top_left_shape.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 hidden w-32 md:block lg:w-44"
      />

      {/* Decoración derecha */}
      <img
        src="/img/top_right_shape.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 hidden w-40 md:block lg:w-56"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">

        <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">

          {/* Imagen */}
          <img
            src="/img/trabajador-carousel.jpg"
            alt="Trabajador de OficiosYA"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[5px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Contenido */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

            <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              OficiosYA - Servicios Profesionales a tu Medida
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg">
              Servicios de calidad para satisfacer tus necesidades.
            </p>

            <a
              href="/contacto"
              className="mt-7 rounded-full bg-[#D8F373] px-6 py-3 font-semibold text-black transition hover:bg-[#c9e667]"
            >
              Ponte en contacto con nosotros
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;