import { useEffect, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PiHandHeartDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import {
  primaryColor,
  secundaryColor,
  terciaryColor,
  ultimateColor,
} from "../colors";
import Inclusivo from "../../public/background.png";

import { MesaggeContext } from "../context/MessageContext";
import { PiChatCircleBold } from "react-icons/pi";

const fastAccess = `relative flex flex-col justify-center items-center py-2 px-4 h-36 text-2xl md:w[10px] lg:w-[200px] rounded-[30px] bg-[#FDE5EC]  text-black font-normal `;

let Home = () => {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  const testAccess = () => {
    navigate("/test");
  };

  useEffect(() => {
    setMesagge("");
  }, []);

  return (
    <div
      className={`  w-screen h-screen bg-[#4477CE] relative z-10 flex justify-center items-center flex-col  `}
    >
      <img
        className="h-44 mb-10"
        srcSet="https://cdn.discordapp.com/attachments/749326094800519179/1129449683664785480/Logo.png"
        alt="Aprendizaje Inclusivo"
      />
      <form
        className=" h-18 flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full h-[50px] bg-white justify-between items-center rounded-full">
          <input
            placeholder="Busca alguna frase"
            onChange={(e) => {
              setMesagge(e.target.value);
            }}
            className="text-2xl bg-transparent ml-4 rounded-xl outline-none p-3 font-mono"
            type="text"
          />
          <AiOutlineSearch
            className={`mr-6 text-3xl text-[${secundaryColor}]`}
          />
        </div>
      </form>
      <div className="flex justify-center gap-4 w-full mt-16 font-mono">
        <button className={fastAccess}>
          <div className="bg-black flex text-3xl rounded-full p-[10px] absolute top-[-20px] text-white">
            <PiHandHeartDuotone />
          </div>
          Aprende a hablar con señas
        </button>
        <button className={fastAccess}>
          <div className="bg-black flex text-3xl rounded-full p-[10px] absolute top-[-20px] text-white">
            <PiChatCircleBold />
          </div>
          Busca palabras en segundos
        </button>
      </div>
    </div>
  );
};

export default Home;
