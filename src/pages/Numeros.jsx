import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MesaggeContext } from "../context/MessageContext";

function Numeros() {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();
  const numberStyle = "text-4xl cursor-pointer border-2 py-4 border-[#F8DE22] text-[#F3AA60] w-[120px] text-center rounded-xl"

  const handleSubmit = (e) => {
    navigate("/search");
    setMesagge(e);
  };
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h1 className="animate-fade-down  bg-[#FDE5EC] animate-once animate-duration-500 animate-ease-in text-[40px] w-screen mb-8 text-center mt-[60px]  p-4 text-[#000] ">
        Numeros
      </h1>
      <div className="animate-fade-down animate-once animate-duration-500 animate-ease-in border-8 m-8 bg-white border-[#FDE5EC] rounded-2xl py-4 flex mt-10 lg:w-[500px] items-center justify-center flex-wrap gap-1">
        <h6
          onClick={() => handleSubmit("1")}
          className={numberStyle}
        >
          1
        </h6>
        <h6
          onClick={() => handleSubmit("2")}
          className={numberStyle}
        >
          2
        </h6>
        <h6
          onClick={() => handleSubmit("3")}
          className={numberStyle}
        >
          3
        </h6>
        <h6
          onClick={() => handleSubmit("4")}
          className={numberStyle}
        >
          4
        </h6>
        <h6
          onClick={() => handleSubmit("5")}
          className={numberStyle}
        >
          5
        </h6>
        <h6
          onClick={() => handleSubmit("6")}
          className={numberStyle}
        >
          6
        </h6>
        <h6
          onClick={() => handleSubmit("7")}
          className={numberStyle}
        >
          7
        </h6>
        <h6
          onClick={() => handleSubmit("8")}
          className={numberStyle}
        >
          8
        </h6>
        <h6
          onClick={() => handleSubmit("9")}
          className={numberStyle}
        >
          9
        </h6>
        <h6
          onClick={() => handleSubmit("10")}
          className={numberStyle}
        >
          10
        </h6>
        <h6
          onClick={() => handleSubmit("11")}
          className={numberStyle}
        >
          11
        </h6>
        <h6
          onClick={() => handleSubmit("12")}
          className={numberStyle}
        >
          12
        </h6>
        <h6
          onClick={() => handleSubmit("13")}
          className={numberStyle}
        >
          13
        </h6>
        <h6
          onClick={() => handleSubmit("14")}
          className={numberStyle}
        >
          14
        </h6>
        <h6
          onClick={() => handleSubmit("15")}
          className={numberStyle}
        >
          15
        </h6>
        <h6
          onClick={() => handleSubmit("16")}
          className={numberStyle}
        >
          16
        </h6>
        <h6
          onClick={() => handleSubmit("17")}
          className={numberStyle}
        >
          17
        </h6>
        <h6
          onClick={() => handleSubmit("18")}
          className={numberStyle}
        >
          18
        </h6>
        <h6
          onClick={() => handleSubmit("19")}
          className={numberStyle}
        >
          19
        </h6>
        <h6
          onClick={() => handleSubmit("20")}
          className={numberStyle}
        >
          20
        </h6>
      </div>
    </div>
  );
}

export default Numeros;
