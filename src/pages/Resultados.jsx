
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

function Resultados() {
  const [params] = useSearchParams();
  const servicio = params.get("servicio") || "";

  const [trabajadores, setTrabajadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setCargando(true);
    setError("");

    fetch("https://randomuser.me/api/?results=12&seed=oficiosya")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al consultar la API");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setTrabajadores(datos.results);
      })
      .catch(() => {
        setError("No se pudieron cargar los profesionales.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Resultados para: {servicio}
        </h1>

        <p className="mb-8 text-gray-600">
          Encontrá profesionales para el servicio que necesitás.
        </p>

        {cargando && <p>Cargando profesionales...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!cargando && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {trabajadores.map((trabajador) => (
              <div
                key={trabajador.login.uuid}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                {/* FOTO */}
                <img
                  src={trabajador.picture.large}
                  alt="Foto del profesional"
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                />

                {/* NOMBRE */}
                <h2 className="text-center text-xl font-semibold">
                  {trabajador.name.first} {trabajador.name.last}
                </h2>

                {/* OFICIO */}
                <p className="mt-2 text-center font-medium text-[#0D7A5F]">
                  {servicio}
                </p>

                {/* UBICACIÓN */}
                <p className="mt-2 text-center text-sm text-gray-500">
                  {trabajador.location.city}, {trabajador.location.country}
                </p>

                {/* BOTÓN */}
                <Link
                  to="/contacto"
                  className="mt-5 block rounded-lg bg-[#0D7A5F] px-4 py-3 text-center font-medium text-white transition hover:bg-[#09634d]"
                >
                  Solicitar servicio
                </Link>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default Resultados;
