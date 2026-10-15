import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";

function useSweetAlert() {
  const [alertaAbierta, setAlertaAbierta] = useState(false);

  useEffect(() => {
    if (!alertaAbierta) {
      return undefined;
    }

    const temporizador = window.setTimeout(() => Swal.close(), 5000);
    return () => window.clearTimeout(temporizador);
  }, [alertaAbierta]);

  const mostrarAlerta = useCallback(async (opciones) => {
    setAlertaAbierta(true);
    try {
      return await Swal.fire(opciones);
    } finally {
      setAlertaAbierta(false);
    }
  }, []);

  return mostrarAlerta;
}

export default useSweetAlert;
