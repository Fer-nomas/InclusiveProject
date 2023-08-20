import React from "react";
import { useNavigate } from "react-router-dom";
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

  const letterStyle = "h-[100px] cursor-pointer"

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-screen bg-[#4477CE] flex justify-center flex-col items-center">
      <h1 className="animate-fade-down animate-once animate-duration-500 animate-ease-in text-5xl text-center mt-[100px]  border-4 p-4 rounded-2xl text-white border-[#FDE5EC]">Abecedario en señas</h1>
      <div className="animate-fade-down animate-once animate-duration-500 animate-ease-in border-8 m-8 bg-white border-[#FDE5EC] rounded-2xl py-4 flex mt-10 lg:w-[500px] items-center justify-center flex-wrap gap-1">
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterA} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterB} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterC} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterD} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterE} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterF} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterG} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterH} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterI} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterJ} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterK} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterL} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterM} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterN} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterÑ} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterO} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterP} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterQ} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterR} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterS} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterT} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterU} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterV} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterW} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterX} alt="" />
        <img onClick={handleSubmit}  className={letterStyle} srcSet={LetterY} alt="" />
        <img onClick={handleSubmit}  className={letterStyle}  srcSet={LetterZ} alt="" />
        
      </div>
    </div>
  );
}

export default Abecedario;
