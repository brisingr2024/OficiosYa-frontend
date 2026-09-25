function TeamMember({ nombre, alt }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-gray-100">
        <img
          src="/img/loro.png"
          alt={alt}
          className="h-40 w-auto object-contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-center bg-[#0D7A5F] p-5 text-center">
        <h2 className="text-lg font-semibold text-white">
          {nombre}
        </h2>
      </div>
    </article>
  );
}

export default TeamMember;