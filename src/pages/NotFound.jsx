import React from "react";

function NotFound() {
  return (
    <div className="w-screen bg-white h-screen flex flex-col text-5xl gap-2 justify-center items-center text-center">
        <h1>404</h1>
      <h4 className="text-xl p-4">No se a encontrado resultados a esta busqueda</h4>
      <h4 className="text-xl">Intente volver a buscar.</h4>
      <a href="/" className="cursor-pointer text-xl border-2 py-2 px-6 rounded-3xl my-2 border-[#000] bg-[#FDE5EC]">volver</a>
    </div>
  );
}

export default NotFound;
