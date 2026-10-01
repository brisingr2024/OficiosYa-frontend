function ServiceCard({ servicio }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-[#0D7A5F] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={servicio.imagen}
          alt={servicio.nombre}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5 text-center text-white">
        <h3 className="text-lg font-semibold">
          {servicio.nombre}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/90">
          {servicio.descripcion}
        </p>

        <button className="mt-5 rounded-full bg-[#D8F373] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#c9e667]">
          Ver servicio
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;