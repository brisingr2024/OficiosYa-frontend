function Footer() {
  return (
    <footer className="bg-[#67727E] px-4 py-8 text-center text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-4">
          <img
            src="/img/loro.png"
            alt="OficiosYA"
            className="mx-auto h-12 w-auto"
          />
        </div>

        <p className="text-sm text-white/80">
          OficiosYA - Servicios profesionales a tu medida.
        </p>

        <div className="mt-5 flex justify-center gap-6 text-sm">
          <a
            href="/"
            className="transition hover:text-[#D8F373]"
          >
            Inicio
          </a>

          <a
            href="/servicios"
            className="transition hover:text-[#D8F373]"
          >
            Servicios
          </a>

          <a
            href="/contacto"
            className="transition hover:text-[#D8F373]"
          >
            Contacto
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">
          © {new Date().getFullYear()} OficiosYA. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;