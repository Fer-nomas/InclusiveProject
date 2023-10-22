import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MesaggeContext } from "../context/MessageContext";

import LetterA from "../assets/a.png";
import LetterB from "../assets/b.png";
import LetterC from "../assets/c.png";
import LetterD from "../assets/d.png";
import LetterE from "../assets/e.png";
import LetterF from "../assets/f.png";
import LetterG from "../assets/g.png";
import LetterH from "../assets/h.png";
import LetterI from "../assets/i.png";
import LetterJ from "../assets/j.png";
import LetterK from "../assets/k.png";
import LetterL from "../assets/l.png";
import LetterM from "../assets/m.png";
import LetterN from "../assets/n.png";
import LetterÑ from "../assets/ñ.png";
import LetterO from "../assets/o.png";
import LetterP from "../assets/p.png";
import LetterQ from "../assets/q.png";
import LetterR from "../assets/r.png";
import LetterS from "../assets/s.png";
import LetterT from "../assets/t.png";
import LetterU from "../assets/u.png";
import LetterV from "../assets/v.png";
import LetterW from "../assets/w.png";
import LetterX from "../assets/x.png";
import LetterY from "../assets/y.png";
import LetterZ from "../assets/z.png";

function Abecedario() {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;

  const letterStyle = "h-[100px] cursor-pointer";

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/search");
    setMesagge(e);
  };

  return (
    <div className="w-screen bg-[#4477CE] flex  flex-col items-center">
      <h1 className="animate-fade-down  bg-[#FDE5EC] animate-once animate-duration-500 animate-ease-in text-[40px] w-screen mb-8 text-center mt-[60px]  p-4 text-[#000] ">
        Abecedario en señas
      </h1>
      <div className="animate-fade-down animate-once animate-duration-500 animate-ease-in border-8 m-8 bg-white border-[#FDE5EC] rounded-2xl py-4 flex mt-10 lg:w-[500px] items-center justify-center flex-wrap gap-1">
        <img
          onClick={() => handleSubmit("a")}
          className={letterStyle}
          srcSet={LetterA}
          alt=""
        />
        <img
          onClick={() => handleSubmit("b")}
          className={letterStyle}
          srcSet={LetterB}
          alt=""
        />
        <img
          onClick={() => handleSubmit("c")}
          className={letterStyle}
          srcSet={LetterC}
          alt=""
        />
        <img
          onClick={() => handleSubmit("d")}
          className={letterStyle}
          srcSet={LetterD}
          alt=""
        />
        <img
          onClick={() => handleSubmit("e")}
          className={letterStyle}
          srcSet={LetterE}
          alt=""
        />
        <img
          onClick={() => handleSubmit("f")}
          className={letterStyle}
          srcSet={LetterF}
          alt=""
        />
        <img
          onClick={() => handleSubmit("g")}
          className={letterStyle}
          srcSet={LetterG}
          alt=""
        />
        <img
          onClick={() => handleSubmit("h")}
          className={letterStyle}
          srcSet={LetterH}
          alt=""
        />
        <img
          onClick={() => handleSubmit("i")}
          className={letterStyle}
          srcSet={LetterI}
          alt=""
        />
        <img
          onClick={() => handleSubmit("j")}
          className={letterStyle}
          srcSet={LetterJ}
          alt=""
        />
        <img
          onClick={() => handleSubmit("k")}
          className={letterStyle}
          srcSet={LetterK}
          alt=""
        />
        <img
          onClick={() => handleSubmit("l")}
          className={letterStyle}
          srcSet={LetterL}
          alt=""
        />
        <img
          onClick={() => handleSubmit("m")}
          className={letterStyle}
          srcSet={LetterM}
          alt=""
        />
        <img
          onClick={() => handleSubmit("n")}
          className={letterStyle}
          srcSet={LetterN}
          alt=""
        />
        <img
          onClick={() => handleSubmit("ñ")}
          className={letterStyle}
          srcSet={LetterÑ}
          alt=""
        />
        <img
          onClick={() => handleSubmit("o")}
          className={letterStyle}
          srcSet={LetterO}
          alt=""
        />
        <img
          onClick={() => handleSubmit("p")}
          className={letterStyle}
          srcSet={LetterP}
          alt=""
        />
        <img
          onClick={() => handleSubmit("q")}
          className={letterStyle}
          srcSet={LetterQ}
          alt=""
        />
        <img
          onClick={() => handleSubmit("r")}
          className={letterStyle}
          srcSet={LetterR}
          alt=""
        />
        <img
          onClick={() => handleSubmit("s")}
          className={letterStyle}
          srcSet={LetterS}
          alt=""
        />
        <img
          onClick={() => handleSubmit("t")}
          className={letterStyle}
          srcSet={LetterT}
          alt=""
        />
        <img
          onClick={() => handleSubmit("u")}
          className={letterStyle}
          srcSet={LetterU}
          alt=""
        />
        <img
          onClick={() => handleSubmit("v")}
          className={letterStyle}
          srcSet={LetterV}
          alt=""
        />
        <img
          onClick={() => handleSubmit("w")}
          className={letterStyle}
          srcSet={LetterW}
          alt=""
        />
        <img
          onClick={() => handleSubmit("x")}
          className={letterStyle}
          srcSet={LetterX}
          alt=""
        />
        <img
          onClick={() => handleSubmit("y")}
          className={letterStyle}
          srcSet={LetterY}
          alt=""
        />
        <img
          onClick={() => handleSubmit("z")}
          className={letterStyle}
          srcSet={LetterZ}
          alt=""
        />
      </div>
    </div>
  );
}

export default Abecedario;
