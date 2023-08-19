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
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      {newData.map((e) => {
        if (
          mesagge
            .toLowerCase()
            .trim()
            .includes(e.symbolName.toLowerCase().trim()) 
        ) {
          return (
            <div key={e}>
              <div className="text-6xl m-10 font-bold" key={e.id}>
                Esta es la <br /> forma de decir{" "}
                <b className=" text-blue-800">{e.symbolName}</b> <br /> en
                lenguaje de señas.
              </div>
              <div
                className="h-[360px] text-blue-950 flex pla"
              >
                <ReactPlayer key={e.id + 1} url={e.link} controls playing muted />
              </div>
            </div>
          );
        } 
      })}
    </div>
  );
}

export default Search;
