import ServiceCard from "./ServiceCard";
import { servicios } from "../data/servicios";

function ServiceGrid() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="mb-10 text-center text-3xl font-bold text-[#0D7A5F] md:text-4xl">
          Nuestros Servicios de Oficios y Mantenimiento
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <ServiceCard
              key={servicio.nombre}
              servicio={servicio}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServiceGrid;