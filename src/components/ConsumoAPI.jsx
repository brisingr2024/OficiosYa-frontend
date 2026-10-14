import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ConsumoAPI = () => {
  // 1. Estados para almacenar los datos y controlar la pantalla de carga
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. Acceso a la variable de entorno
  const API_URL = import.meta.env.VITE_API_URL;

  // 3. Función asíncrona que utiliza Axios
  const obtenerDatos = async () => {
    try {
      // axios.get() hace la petición. La respuesta de la API se guarda en response.data
      const response = await axios.get(API_URL);
      
      // Se guardan los datos en el estado
      setDatos(response.data);
    } catch (error) {
      // Manejo de errores utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudieron obtener los datos de la API.',
      });
      console.error("Detalle del error:", error);
    } finally {
      // Se detiene el estado de carga tanto si la petición fue exitosa como si falló
      setCargando(false);
    }
  };

  // 4. useEffect ejecuta la petición automáticamente al cargar el componente
  useEffect(() => {
    obtenerDatos();
  }, []); // El array vacío indica que solo se ejecutará una vez al montar

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