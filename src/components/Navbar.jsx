import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loro from "../assets/img/loro.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  function buscarServicio(e) {
    e.preventDefault();
    const termino = busqueda.trim();
    navigate(termino ? `/servicios?servicio=${encodeURIComponent(termino)}` : "/servicios");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#0D7A5F]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={loro}
              alt="OficiosYA"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-white">
              OficiosYA
            </span>
          </Link>

          {/* NAVEGACIÓN DESKTOP */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="relative font-medium text-white transition hover:text-[#D8F373]"
            >
              Inicio
            </Link>

            <Link
              to="/servicios"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Servicios
            </Link>

            <Link
              to="/contacto"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Contacto
            </Link>

            <Link
              to="/about"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Sobre nosotros
            </Link>
          </div>

          {/* DERECHA DESKTOP */}
          <div className="hidden items-center gap-3 md:flex">

            {/* BUSCADOR */}
            <form onSubmit={buscarServicio} className="relative">
              <input
                type="search"
                placeholder="¿Qué servicio necesitás?"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="h-10 w-56 rounded-full bg-white px-4 pr-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#D8F373]"
              />

              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label="Buscar servicio"
              >
                ⌕
              </button>
            </form>

            {/* BOTONES */}
            <Link
              to="/contacto"
              className="rounded-full bg-[#D8F373] px-5 py-2.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#c9e667]"
            >
              Solicitar servicio
            </Link>

            <Link
              to="/login"
              className="rounded-full bg-[#D8F373] px-5 py-2.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#c9e667]"
            >
              Iniciar sesión
            </Link>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="text-2xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* MENÚ MOBILE */}
        {menuOpen && (
          <div className="border-t border-white/20 py-5 md:hidden">
            <div className="flex flex-col gap-2">

              <Link
                to="/"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>

              <Link
                to="/servicios"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>

              <Link
                to="/contacto"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>

              <Link
                to="/about"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Sobre nosotros
              </Link>

              {/* BUSCADOR MOBILE */}
              <div className="mt-3 border-t border-white/20 pt-4">
                <form onSubmit={buscarServicio}>
                  <input
                    type="search"
                    placeholder="¿Qué servicio necesitás?"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="h-11 w-full rounded-full bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none"
                  />
                </form>

                <Link
                  to="/contacto"
                  className="mt-3 block rounded-full bg-[#D8F373] px-5 py-3 text-center font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar servicio
                </Link>

                <Link
                  to="/login"
                  className="mt-3 block rounded-full bg-[#D8F373] px-5 py-3 text-center font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;