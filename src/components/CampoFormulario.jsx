function CampoFormulario({ id, label, tipo = "text", multilinea = false }) {
    const estilos =
        "w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#0D7A5F]";

    return (
        <div>
            <label htmlFor={id} className="mb-1 block font-semibold text-gray-600">
                {label}
            </label>

            {multilinea ? (
                <textarea id={id} rows="4" required className={estilos} />
            ) : (
                <input id={id} type={tipo} required className={estilos} />
            )}
        </div>
    );
}

export default CampoFormulario;