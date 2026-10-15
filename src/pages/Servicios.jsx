
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ServiceGrid from "../components/ServiceGrid";
import useSweetAlert from "../hooks/useSweetAlert";

const API_URL = import.meta.env.VITE_API_URL;

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function Servicios() {
  const mostrarAlerta = useSweetAlert();
  const [params] = useSearchParams();
  const servicio = params.get("servicio")?.trim() || "";

  const [trabajadores, setTrabajadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function obtenerTrabajadores() {
      if (!API_URL) {
        const mensaje = "No está configurada la URL de la API.";
        setError(mensaje);
        setCargando(false);
        await mostrarAlerta({
          icon: "error",
          title: "Error de configuración",
          text: mensaje,
        });
        return;
      }

      try {
        const respuesta = await axios.get(API_URL, { signal: controller.signal });
        if (!Array.isArray(respuesta.data)) {
          throw new Error("La respuesta de la API no tiene el formato esperado.");
        }

        setTrabajadores(respuesta.data);
      } catch (errorApi) {
        if (axios.isCancel(errorApi)) {
          return;
        }

        console.error("No se pudieron cargar los profesionales:", errorApi);
        setError("No se pudieron cargar los profesionales.");
        await mostrarAlerta({
          icon: "error",
          title: "Error de conexión",
          text: "No se pudieron obtener los profesionales. Intentá nuevamente más tarde.",
        });
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    obtenerTrabajadores();
    return () => controller.abort();
  }, [mostrarAlerta]);

  const terminoNormalizado = normalizarTexto(servicio);
  const trabajadoresFiltrados = trabajadores.filter((trabajador) =>
    normalizarTexto(String(trabajador.oficio || "")).includes(terminoNormalizado),
  );
  const serviciosParaMostrar = trabajadoresFiltrados.map((trabajador) => ({
    id: trabajador.id,
    nombre: trabajador.oficio || "Oficio sin especificar",
    descripcion: [
      trabajador.nombre,
      trabajador.ubicacion,
    ].filter(Boolean).join(" · "),
    imagen: trabajador.foto,
  }));

  useEffect(() => {
    if (!cargando && !error && trabajadoresFiltrados.length === 0) {
      mostrarAlerta({
        icon: "info",
        title: "No encontramos servicios",
        text: servicio
          ? `No encontramos servicios de ${servicio}. Probá con otro oficio.`
          : "Todavía no hay profesionales disponibles.",
      });
    }
  }, [cargando, error, servicio, trabajadoresFiltrados.length, mostrarAlerta]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          {servicio ? `Resultados para: ${servicio}` : "Todos los servicios"}
        </h1>

        <p className="mb-8 text-gray-600">
          Encontrá profesionales para el oficio que necesitás.
        </p>

        {cargando && <p>Cargando profesionales...</p>}

        {!cargando && !error && trabajadoresFiltrados.length > 0 && (
          <ServiceGrid
            servicios={serviciosParaMostrar}
            titulo={servicio ? `Profesionales de ${servicio}` : "Profesionales disponibles"}
          />
        )}
      </div>
    </main>
  );
}

export default Servicios;
