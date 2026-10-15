import CampoFormulario from "../components/CampoFormulario";
import useSweetAlert from "../hooks/useSweetAlert";


function Contacto() {
  const mostrarAlerta = useSweetAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formulario = e.currentTarget;

    if (!formulario.checkValidity()) {
      const campoInvalido = formulario.querySelector(":invalid");
      const mensaje = campoInvalido?.type === "email" && campoInvalido.value
        ? "Ingresá una dirección de email válida."
        : "Completá todos los campos antes de enviar el mensaje.";

      await mostrarAlerta({
        icon: "warning",
        title: "Revisá el formulario",
        text: mensaje,
      });
      return;
    }

    await mostrarAlerta({
      icon: "success",
      title: "Mensaje enviado",
      text: "¡Gracias! Recibimos tu mensaje y te responderemos pronto.",
    });
    formulario.reset();
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

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4 text-left">
          <CampoFormulario id="nombre" label="Nombre completo" />
          <CampoFormulario id="email" label="Email" tipo="email" />
          <CampoFormulario id="detalle" label="Detalle de su solicitud" multilinea />

          <button
            type="submit"
            className="w-full rounded-md border border-[#0D7A5F] bg-[#D8F373] py-3 font-medium text-black transition hover:bg-[#c9e667]"
          >
            Enviar mensaje
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contacto;