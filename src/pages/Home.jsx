import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MesaggeContext } from "../context/MessageContext";

import { AiOutlineSearch } from "react-icons/ai";
import { PiHandHeartDuotone } from "react-icons/pi";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { PiChatCircleBold } from "react-icons/pi";
import hands from "../../public/hands.png";
import Card from "./Card";

const fastAccess = `text-center relative flex flex-col justify-center items-center py-2 px-8 h-32 w-[300px]  text-xl rounded-[30px] bg-[#FDE5EC] z-20 text-black font-normal `;
const fastAccessText =
  "  bg-[#F8DE22] flex text-3xl rounded-full p-[10px] absolute top-[-20px] text-[#F3AA60]";

let Home = () => {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();

  const alDarClick = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  useEffect(() => {
    setMesagge("");
  }, []);

  return (
    <div
      className={` z-120 bg-[#4477CE] relative z-0 flex justify-center  items-center flex-col`}
    >
      <img
        className="animate-fade-down animate-once animate-duration-500 animate-ease-in h-52 mt-20 mb-4"
        srcSet="https://cdn.discordapp.com/attachments/749326094800519179/1141878783209644052/logo_del_proyecto_MEJORADO..png"
        alt="Aprendizaje Inclusivo"
      />
      <form
        className="animate-fade-down animate-once animate-duration-500 animate-ease-in h-18 flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/2"
        onSubmit={alDarClick}
      >
        <div className=" flex w-full h-[50px] bg-white justify-between items-center rounded-full">
          <input
            placeholder="Ingresa una palabra"
            onChange={(e) => {
              setMesagge(e.target.value);
            }}
            className="text-xl bg-transparent w-screen ml-2 rounded-xl outline-none p-3 "
            type="text"
          />
          <AiOutlineSearch className={`mr-6 text-5xl text-[#1477CE] `} />
        </div>
      </form>

      <div className="animate-fade-down animate-once animate-duration-500 animate-ease-in flex flex-wrap justify-center gap-4 w-screen mt-16 mb-12 ">
        <div className={fastAccess}>
          <div className={fastAccessText}>
            <PiHandHeartDuotone />
          </div>
          Aprende a hablar con señas
        </div>
        <div className={fastAccess}>
          <div className={fastAccessText}>
            <PiChatCircleBold />
          </div>
          Busca palabras en segundos
        </div>
        <div className={fastAccess}>
          <div className={fastAccessText}>
            <RxLetterCaseCapitalize />
          </div>
          Aprende el abecedario en señas
        </div>
      </div>
      <div className=" bg-gray-200 flex flex-col items-center pt-36 w-screen  mt-10 font-extrabold  rounded-t-[50px]">
        <div className="text-4xl sm:text-4xl lg:text-7xl flex-col flex  gap-4 text-center animate-fade-left animate-once animate-duration-700 animate-in-out animate-fill-both">
          <div className="text-center">
            Consulte todo lo que quiera sobre el
          </div>
          <div className="px-50">
            <span className="  flex justify-center items-center gap-2 text-center">
              <div className="border-4 p-2  border-[#57c78f] rounded-full px-4 flex text-center justify-center items-center gap-2">
                Lenguaje de Señas{" "}
                <img
                  className="h-[60px] animate-pulse"
                  srcSet="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjNTdDNzhGIiBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiLz4KICAgICAgICA8cGF0aCBkPSJNNCA0aDIwdjIwSDR6Ii8+CiAgICAgICAgPHBhdGggZD0iTTIwLjkgMTAuMDE2YS42MjUuNjI1IDAgMCAxIDAgLjg4NGwtNy4xNTUgNy4xNTVhMi4yOTIgMi4yOTIgMCAwIDEtMy4yNCAwbC0yLjk4OS0yLjk4OGEuNjI1LjYyNSAwIDEgMSAuODg0LS44ODRsMi45ODggMi45ODhhMS4wNDIgMS4wNDIgMCAwIDAgMS40NzQgMGw3LjE1NC03LjE1NWEuNjI1LjYyNSAwIDAgMSAuODg0IDB6IiBmaWxsPSIjMDUwNTA2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                />
              </div>
            </span>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center w-full px-10 py-10 ">
          <Card
            info={
              "Practica regularmente el alfabeto y los números para fortalecer tu base antes de avanzar a vocabulario y frases más complejas."
            }
            img={"https://aprendelenguadesignos.com/wp-content/uploads/2010/12/numeros-en-lengua-de-signos.jpg"}
          />
          <Card info={
              "Aprende el alfabeto manual y los números. Esto te permitirá deletrear palabras y expresar cantidades, lo que es fundamental para la comunicación en lenguaje de señas."
            }
            img={"https://i.pinimg.com/originals/8c/47/63/8c4763a630ebc93b6b801bf6734d7035.jpg"}
            
          />
          <Card info={"La práctica constante te ayudará a retener lo que has aprendido y a mejorar tu fluidez."} img ={hands} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
