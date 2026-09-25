import { useState } from "react";
import login from "../pages/Login";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#0D7A5F]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/img/loro.png"
              alt="OficiosYA"
              className="h-12 w-auto"
            />
          </a>

          {/* NAVEGACIÓN DESKTOP */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="relative font-medium text-white transition hover:text-[#D8F373]"
            >
              Inicio
            </a>

            <a
              href="/servicios"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Servicios
            </a>

            <a
              href="/contacto"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Contacto
            </a>
            <a
              href="/contacto"
              className="font-medium text-white transition hover:text-[#D8F373]"
            >
              Sobre nosotros
            </a>
          </div>

          {/* DERECHA */}
          <div className="hidden items-center gap-3 md:flex">

            {/* BUSCADOR */}
            <div className="relative">
              <input
                type="search"
                placeholder="¿Qué servicio necesitás?"
                className="h-10 w-56 rounded-full bg-white px-4 pr-10 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#D8F373]"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                ⌕
              </span>
            </div>

            {/* CTA */}
            <a
              href="/contacto"
              className="rounded-full bg-[#D8F373] px-5 py-2.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#c9e667]"
            >
              Solicitar servicio
            </a>
            <a
              href="../pages/Login"
              className="rounded-full bg-[#D8F373] px-5 py-2.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#c9e667]"
            >
              Iniciar sesión
            </a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Abrir menú"
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

              <a
                href="/"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </a>

              <a
                href="/servicios"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>

              <a
                href="/contacto"
                className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>

              <div className="mt-3 border-t border-white/20 pt-4">
                <input
                  type="search"
                  placeholder="¿Qué servicio necesitás?"
                  className="h-11 w-full rounded-full bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none"
                />

                <a
                  href="/contacto"
                  className="mt-3 block rounded-full bg-[#D8F373] px-5 py-3 text-center font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar servicio
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;