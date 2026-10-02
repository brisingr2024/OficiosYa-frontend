import { useState } from "react";
import CampoFormulario from "../components/CampoFormulario";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-medium text-gray-900 md:text-4xl">
          Ponte en contacto con nosotros
        </h1>
        <p className="mt-4 text-gray-800">
          Complete el formulario indicando su solicitud y le responderemos a la brevedad.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
          <CampoFormulario id="nombre" label="Nombre completo" />
          <CampoFormulario id="email" label="Email" tipo="email" />
          <CampoFormulario id="detalle" label="Detalle de su solicitud" multilinea />

          <button
            type="submit"
            className="w-full rounded-md border border-[#0D7A5F] bg-[#D8F373] py-3 font-medium text-black transition hover:bg-[#c9e667]"
          >
            Enviar mensaje
          </button>

          {enviado && (
            <p className="text-center font-medium text-[#0D7A5F]">
              ¡Gracias! Recibimos tu mensaje y te responderemos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacto;