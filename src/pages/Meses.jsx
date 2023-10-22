import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MesaggeContext } from "../context/MessageContext";

function Meses() {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();
  const monthStyle = "py-2 px-6 w-[200px] text-center  rounded-xl text-[#F3AA60] mt-2  text-xl cursor-pointer border-2 border-[#F8DE22]"

  const handleSubmit = (e) => {
    navigate("/search");
    setMesagge(e);
  };
  return (
    <div className=" w-screen flex flex-col items-center justify-center">
      <h1 className="animate-fade-down  bg-[#FDE5EC] animate-once animate-duration-500 animate-ease-in text-[40px] w-screen mb-8 text-center mt-[60px]  p-4 text-[#000] ">
        Meses
      </h1>
      <div
        className="font-semibold animate-fade-down animate-once animate-duration-500 animate-ease-in border-8 m-8 bg-white border-[#FDE5EC] rounded-2xl py-4 flex mt-10 lg:w-[500px] items-center justify-center flex-wrap gap-1"
       
      >
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("enero")}
        >
          Enero
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("febrero")}
        >
          Febrero
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Marzo")}
        >
          Marzo
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Abril")}
        >
          Abril
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Mayo")}
        >
          Mayo
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Junio")}
        >
          Junio
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Julio")}
        >
          Julio
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Agosto")}
        >
          Agosto
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Septiembre")}
        >
          Septiembre
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Octubre")}
        >
          Octubre
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Noviembre")}
        >
          Noviembre
        </h6>
        <h6
          className={monthStyle}
          onClick={() => handleSubmit("Diciembre")}
        >
          Diciembre
        </h6>
      </div>
    </div>
  );
}

export default Meses;
