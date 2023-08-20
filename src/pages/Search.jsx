import React from "react";
import { MesaggeContext } from "../context/MessageContext";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

function Search() {
  const context = useContext(MesaggeContext);

  const [mesagge, setMesagge] = context;

  const navigate = useNavigate();

  const [newData, setNewData] = useState([]);

  const [found, setFound] = useState(true);

  useEffect(() => {
    if (!mesagge) {
      navigate("/");
    }
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await supabase.from("Señas").select();
    setNewData(data);
  }

  return (
    <div className="flex justify-center  flex-col">
      {newData.map((e) => {
        if (
          mesagge
            .toLowerCase()
            .trim()
            .includes(e.symbolName.toLowerCase().trim())
        ) {
          return (
            <div className="h-screen overflow-y-hidden flex justify-evenly flex-col" key={e}>
              <div className="flex flex-col items-center">
                <div
                  className="lg:text-6xl sm:text-5xl text-4xl m-2 mt-20 font-bold flex flex-col items-left"
                  key={e.id}
                >
                  Esta es la <br /> forma de decir{" "}
                  <b className=" text-blue-800 first-letter:uppercase">{e.symbolName}</b> en lenguaje
                  de señas.
                </div>
              </div>

              <div className="h-[360px] text-blue-950 flex justify-center">
                <ReactPlayer
                  key={e.id + 1}
                  url={e.link}
                  controls
                  playing
                  muted
                />
              </div>
              {/* <div className="flex  justify-center items-center flex-col " key={e}>
              <div className="text-5xl mx-4 mt-24 mb-10 font-bold flex flex-col items-start text-left" key={e.id}>
                Esta es la <br /> forma de decir{" "}
                <b className=" text-blue-800 first-letter:uppercase">{e.symbolName}</b>  en
                lenguaje de señas.
              </div>


              <div
                className="h-[360px] text-blue-950 flex pla"
              >
                <ReactPlayer key={e.id + 1} url={e.link} controls playing muted />
              </div>
              
            </div> */}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Search;
