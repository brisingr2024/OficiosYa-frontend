import { useState, useEffect } from 'react';
import axios from 'axios';
import useSweetAlert from '../hooks/useSweetAlert';

const ConsumoAPI = () => {
  const mostrarAlerta = useSweetAlert();
  // 1. Estados para almacenar los datos y controlar la pantalla de carga
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. Acceso a la variable de entorno
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const controller = new AbortController();

    async function obtenerDatos() {
      try {
        const response = await axios.get(API_URL, {
          signal: controller.signal,
        });
        setDatos(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        mostrarAlerta({
          icon: 'error',
          title: 'Error de conexión',
          text: 'No se pudieron obtener los datos de la API.',
        });
        console.error("Detalle del error:", error);
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    obtenerDatos();
    return () => controller.abort();
  }, [API_URL, mostrarAlerta]);

  // 5. Renderizado: Interfaz de carga
  if (cargando) {
    return <p>Cargando información...</p>;
  }

  // 6. Renderizado: Interfaz con los datos obtenidos
  return (
    <div>
      <h2>Resultados de la API</h2>
      <ul>
        {datos.map((item, index) => (
          // Ajusta "item.name" o la propiedad que corresponda según la API que hayas elegido
          <li key={index}>{item.name || JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsumoAPI;